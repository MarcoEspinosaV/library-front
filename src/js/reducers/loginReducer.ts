import { AnyAction } from 'redux';
import { LOGIN_ACTIONS } from '../actions';

export interface ILogin {
  email: string;
  password: string;
  [name: string]: string;
}

export interface IRecoveryPassword {
  email: string;
  [name: string]: string;
}

export interface ICreateParentUserPassword {
  password: string;
  passwordRepeat: string;
}

export interface IChangeRecoveryPassword {
  password: string;
  confirmPassword: string;
  [name: string]: string;
}

export interface IParentUserAndSchoolData {
  school: {
    id: string;
    name: string;
  };
  user: {
    changedPassword: boolean;
    id: string;
    firstName: string;
  };
}

export interface ILoginReducer {
  login: ILogin;
  changeRecoveryPassword: IChangeRecoveryPassword;
  recoveryPassword: IRecoveryPassword;
  createParentUserPassword: ICreateParentUserPassword;
  invitationTokenData: IParentUserAndSchoolData;
  invitationInvalidToken: boolean;
  loginErrors: { [name: string]: string };
  recoveryPasswordErrors: { [name: string]: string };
  changeRecoveryPasswordErrors: { [name: string]: string };
  recoveryPasswordSuccess: boolean;
  changeRecoveryPasswordSuccess: boolean;
  validRecoveryPasswordToken: boolean;
}

const loginReducerState: ILoginReducer = {
  changeRecoveryPassword: {
    confirmPassword: '',
    password: ''
  },
  changeRecoveryPasswordErrors: {},
  changeRecoveryPasswordSuccess: false,
  createParentUserPassword: {
    password: '',
    passwordRepeat: ''
  },
  invitationInvalidToken: false,
  invitationTokenData: {
    school: {
      id: '',
      name: ''
    },
    user: {
      changedPassword: false,
      firstName: '',
      id: ''
    }
  },
  login: {
    email: '',
    password: ''
  },
  loginErrors: {},
  recoveryPassword: {
    email: ''
  },
  recoveryPasswordErrors: {},
  recoveryPasswordSuccess: false,
  validRecoveryPasswordToken: false
};

const loginReducer = (state: ILoginReducer = loginReducerState, action: AnyAction): ILoginReducer => {
  switch (action.type) {
    case LOGIN_ACTIONS.ON_CHANGE_LOGIN_INPUT_VALUE:
      const newValue = { ...state.login };
      newValue[action.payload.key] = action.payload.value;
      const errorsLogin = { ...state.loginErrors };
      delete errorsLogin[action.payload.key];
      return {
        ...state,
        login: newValue,
        loginErrors: errorsLogin
      };
    case LOGIN_ACTIONS.SET_LOGIN_REQUEST_ERRORS:
      return {
        ...state,
        loginErrors: action.payload
      };
    case LOGIN_ACTIONS.ON_CHANGE_RECOVERY_PASSWORD_INPUT:
      const newRPValue = { ...state.recoveryPassword };
      newRPValue[action.payload.key] = action.payload.value;
      const errorsRP = { ...state.recoveryPasswordErrors };
      delete errorsRP[action.payload.key];
      return {
        ...state,
        recoveryPassword: newRPValue,
        recoveryPasswordErrors: errorsRP
      };
    case LOGIN_ACTIONS.ON_CHANGE_INPUT_CHANGE_RECOVERY_PASSWORD:
      const newRP = { ...state.changeRecoveryPassword };
      newRP[action.payload.key] = action.payload.value;
      const errorsRPSection = { ...state.changeRecoveryPasswordErrors };
      delete errorsRPSection[action.payload.key];
      return {
        ...state,
        changeRecoveryPassword: newRP,
        changeRecoveryPasswordErrors: errorsRPSection
      };
    case LOGIN_ACTIONS.SET_RECOVERY_PASSWORD_REQUEST_ERRORS:
      return {
        ...state,
        recoveryPasswordErrors: action.payload
      };
    case LOGIN_ACTIONS.SET_CHANGE_RECOVERY_PASSWORD_ERRORS:
      return {
        ...state,
        changeRecoveryPasswordErrors: action.payload
      };
    case LOGIN_ACTIONS.LOGOUT:
      return {
        ...loginReducerState
      };
    case LOGIN_ACTIONS.ON_CHANGE_CREATE_PASSWORD_PARENT_INPUT:
      const newParent: any = { ...state.createParentUserPassword };
      newParent[action.payload.key] = action.payload.value;
      return {
        ...state,
        createParentUserPassword: newParent
      };
    case LOGIN_ACTIONS.SET_PARENT_USER_CREATE_PASSWORD:
      return {
        ...state,
        invitationTokenData: {
          ...action.payload.data
        }
      };
    case LOGIN_ACTIONS.GET_PARENT_USER_AND_SCHOOL_ERROR:
      return {
        ...state,
        invitationInvalidToken: true
      };
    case LOGIN_ACTIONS.RECOVERY_PASSWORD_SUCCESS:
      return {
        ...state,
        recoveryPasswordSuccess: true
      };
    case LOGIN_ACTIONS.ON_CHANGE_RECOVERY_PASSWORD_SUCCESS:
      return {
        ...state,
        changeRecoveryPasswordSuccess: true
      };
    case LOGIN_ACTIONS.CHANGE_RECOVERY_PASSWORD_VALIDATE_TOKEN_ERROR:
      return {
        ...state,
        validRecoveryPasswordToken: false
      };
    case LOGIN_ACTIONS.CHANGE_RECOVERY_PASSWORD_VALIDATE_TOKEN_SUCCESS:
      return {
        ...state,
        validRecoveryPasswordToken: true
      };
    default:
      return state;
  }
};

export default loginReducer;
