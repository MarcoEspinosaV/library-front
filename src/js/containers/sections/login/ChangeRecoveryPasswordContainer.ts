import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AnyAction } from 'redux';

import { LOGIN_ACTIONS } from '../../../actions';
import ChangeRecoveryPasswordView from '../../../components/sections/login/ChangeRecoveryPasswordView';
import { getLabels } from '../../../languages';
import { ILoginLanguage } from '../../../languages/es_EC/login';
import { IChangeRecoveryPassword } from '../../../reducers/loginReducer';
import { IApp } from '../../../reducers/rootReducer';
import { LOGIN_ROUTES } from '../../../routes/loginRoutes';
import { getQueryParams, getQueryParamsArray } from '../../../utils/UrlUtils';

interface IMapStateToProps {
  labels: ILoginLanguage;
  changeRecoveryPasswordData: IChangeRecoveryPassword;
  changeRecoveryPasswordErrors: { [name: string]: string };
  changeRecoveryPasswordSuccess: boolean;
  token: string;
  validRecoveryPasswordToken: boolean;
}

interface IMapDispatchToProps {
  backToLogin: () => void;
  changeRecoveryPassword: (token?: string, data?: IChangeRecoveryPassword) => void;
  onChangeRecoveryPasswordInput: (key: string, value: string) => void;
  validateRecoveryPasswordToken: (token?: string) => void;
}

export type IChangeRecoveryPasswordContainerProps = IMapStateToProps & IMapDispatchToProps;

const mapStateToProps = (state: IApp, ownProps: any): IMapStateToProps => {
  return {
    changeRecoveryPasswordData: state.loginReducer.changeRecoveryPassword,
    changeRecoveryPasswordErrors: state.loginReducer.changeRecoveryPasswordErrors,
    changeRecoveryPasswordSuccess: state.loginReducer.changeRecoveryPasswordSuccess,
    labels: getLabels('login', state.uiReducer.language),
    token: getQueryParams(ownProps.location.search).token,
    validRecoveryPasswordToken: state.loginReducer.validRecoveryPasswordToken
  };
};

const mapDispatchToProps = (dispatch: (data: AnyAction) => void): IMapDispatchToProps => {
  return {
    backToLogin: () => {
      dispatch(push(LOGIN_ROUTES.LOGIN.path));
    },
    changeRecoveryPassword: (token, data) => {
      dispatch({
        payload: {
          data,
          token
        },
        type: LOGIN_ACTIONS.CHANGE_RECOVERY_PASSWORD
      });
    },
    onChangeRecoveryPasswordInput: (key, value) => {
      dispatch({
        payload: {
          key,
          value
        },
        type: LOGIN_ACTIONS.ON_CHANGE_INPUT_CHANGE_RECOVERY_PASSWORD
      });
    },
    validateRecoveryPasswordToken: token => {
      dispatch({
        payload: token,
        type: LOGIN_ACTIONS.CHANGE_RECOVERY_PASSWORD_VALIDATE_TOKEN
      });
    }
  };
};

function mergeProps(
  stateProps: IMapStateToProps,
  dispatchProps: IMapDispatchToProps
): IChangeRecoveryPasswordContainerProps {
  return {
    ...stateProps,
    ...dispatchProps,
    changeRecoveryPassword: () =>
      dispatchProps.changeRecoveryPassword(stateProps.token, stateProps.changeRecoveryPasswordData),
    validateRecoveryPasswordToken: () => dispatchProps.validateRecoveryPasswordToken(stateProps.token)
  };
}

export default withRouter(
  connect<IMapStateToProps, IMapDispatchToProps, any>(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
  )(ChangeRecoveryPasswordView)
);
