import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AnyAction } from 'redux';

import { LOGIN_ACTIONS } from '../../../actions';
import LoginView from '../../../components/sections/login/LoginView';
import { getLabels } from '../../../languages';
import { ILoginLanguage } from '../../../languages/es_EC/login';
import { ICreateParentUserPassword, ILogin, IRecoveryPassword } from '../../../reducers/loginReducer';
import { IApp } from '../../../reducers/rootReducer';
import { LOGIN_ROUTES } from '../../../routes/loginRoutes';
import { getQueryParams } from '../../../utils/UrlUtils';
import {ROUTES} from "../../../routes";

interface IMapStateToProps {
  labels: ILoginLanguage;
  loginData: ILogin;
  loginErrors: { [name: string]: string };
  recoveryPasswordData: IRecoveryPassword;
  recoveryPasswordErrors: { [name: string]: string };
  recoveryPasswordSuccess: boolean;
  recoveryPasswordQueryParams: boolean;
  urlSchoolName: string;
  invitationUrlToken?: string;
  invitationTokenData: any;
  invitationInvalidToken: any;
  createPasswordData: ICreateParentUserPassword;
}

interface IMapDispatchToProps {
  login: (
    data?: ILogin,
    urlSchoolName?: string,
    token?: string,
    createPasswordData?: ICreateParentUserPassword,
    changedPassword?: boolean
  ) => void;
  backToLogin: () => void;
  recoveryPassword: (data?: { email: string }) => void;
  onChangeLoginInput: (key: string, value: string) => void;
  onChangeRecoveryPasswordInput: (key: string, value: string) => void;
  getSchoolAndParentUser: (token?: string, urlSchoolName?: string) => void;
  onChangeCreatePasswordInput: (key: string, value: string) => void;
  createPassword: (token?: string, urlSchoolName?: string, data?: any) => void;
}

export type ILoginContainerProps = IMapStateToProps & IMapDispatchToProps;

const mapStateToProps = (state: IApp, ownProps: any): IMapStateToProps => {
  const queryParams = getQueryParams();
  return {
    createPasswordData: state.loginReducer.createParentUserPassword,
    invitationInvalidToken: state.loginReducer.invitationInvalidToken,
    invitationTokenData: state.loginReducer.invitationTokenData,
    invitationUrlToken: queryParams.token,
    labels: getLabels('login', state.uiReducer.language),
    loginData: state.loginReducer.login,
    loginErrors: state.loginReducer.loginErrors,
    recoveryPasswordQueryParams: queryParams.recoveryPassword,
    recoveryPasswordData: state.loginReducer.recoveryPassword,
    recoveryPasswordErrors: state.loginReducer.recoveryPasswordErrors,
    recoveryPasswordSuccess: state.loginReducer.recoveryPasswordSuccess,
    urlSchoolName: ownProps.match.params.schoolName
  };
};

const mapDispatchToProps = (dispatch: (data: AnyAction) => void): IMapDispatchToProps => {
  return {
    backToLogin: () => {
      dispatch(push(LOGIN_ROUTES.LOGIN.path));
    },
    createPassword: (token: string, urlSchoolName: string, data: string) => {
      dispatch({
        payload: {
          data,
          schoolName: urlSchoolName,
          token: token ? `?token=${token}` : ''
        },
        type: LOGIN_ACTIONS.CREATE_PASSWORD_PARENT_USER
      });
    },
    getSchoolAndParentUser: (invitationUrlToken: string, urlSchoolName: string) => {
      dispatch({
        payload: {
          schoolName: urlSchoolName,
          token: invitationUrlToken ? `?token=${invitationUrlToken}` : ''
        },
        type: LOGIN_ACTIONS.GET_PARENT_USER_AND_SCHOOL_INFORMATION
      });
    },
    login: (value: any, urlSchoolName, token, createPasswordData, changedPassword) => {
      dispatch(push('/home'));
    },
    onChangeCreatePasswordInput: (key, value) => {
      dispatch({
        payload: {
          key,
          value
        },
        type: LOGIN_ACTIONS.ON_CHANGE_CREATE_PASSWORD_PARENT_INPUT
      });
    },
    onChangeLoginInput: (key, value) => {
      dispatch({
        payload: {
          key,
          value
        },
        type: LOGIN_ACTIONS.ON_CHANGE_LOGIN_INPUT_VALUE
      });
    },
    onChangeRecoveryPasswordInput: (key, value) => {
      dispatch({
        payload: {
          key,
          value
        },
        type: LOGIN_ACTIONS.ON_CHANGE_RECOVERY_PASSWORD_INPUT
      });
    },
    recoveryPassword: data => {
      dispatch({
        payload: { data },
        type: LOGIN_ACTIONS.RECOVERY_PASSWORD
      });
    }
  };
};

function mergeProps(stateProps: IMapStateToProps, dispatchProps: IMapDispatchToProps): ILoginContainerProps {
  return {
    ...stateProps,
    ...dispatchProps,
    createPassword: () =>
      dispatchProps.createPassword(
        stateProps.invitationUrlToken,
        stateProps.urlSchoolName,
        stateProps.createPasswordData
      ),
    getSchoolAndParentUser: () =>
      dispatchProps.getSchoolAndParentUser(stateProps.invitationUrlToken, stateProps.urlSchoolName),
    login: () =>
      dispatchProps.login(
        stateProps.loginData,
        stateProps.urlSchoolName,
        stateProps.invitationUrlToken,
        stateProps.createPasswordData,
        stateProps.invitationTokenData.user.changedPassword
      ),
    recoveryPassword: () => dispatchProps.recoveryPassword(stateProps.recoveryPasswordData)
  };
}

export default withRouter(
  connect<IMapStateToProps, IMapDispatchToProps, any>(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
  )(LoginView)
);
