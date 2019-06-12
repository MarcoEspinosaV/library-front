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
import HomeView from "../../../components/sections/student/HomeView";

interface IMapStateToProps {

}

interface IMapDispatchToProps {

}

export type IHomeContainerProps = IMapStateToProps & IMapDispatchToProps;

const mapStateToProps = (state: IApp, ownProps: any): IMapStateToProps => {
    return {

    };
};

const mapDispatchToProps = (dispatch: (data: AnyAction) => void): IMapDispatchToProps => {
    return {

    };
};

function mergeProps(stateProps: IMapStateToProps, dispatchProps: IMapDispatchToProps): IHomeContainerProps {
    return {
        ...stateProps,
        ...dispatchProps
    };
}

export default withRouter(
    connect<IMapStateToProps, IMapDispatchToProps, any>(
        mapStateToProps,
        mapDispatchToProps,
        mergeProps
    )(HomeView)
);
