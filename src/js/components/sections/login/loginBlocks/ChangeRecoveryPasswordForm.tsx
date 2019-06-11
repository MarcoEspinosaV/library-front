import * as React from 'react';

import { ILoginLanguage } from '../../../../languages/es_EC/login';
import { IChangeRecoveryPassword, IRecoveryPassword } from '../../../../reducers/loginReducer';
import { validateCompleteData } from '../../../../utils/ValidationUtils';
import ButtonComponent from '../../../generic/ButtonComponent';
import InputComponent from '../../../generic/InputComponent';

interface IChangeRecoveryPasswordFormProps {
  labels: ILoginLanguage;
  onChangeRecoveryPasswordInput: (key: string, value: string) => void;
  changeRecoveryPassword: () => void;
  backToLogin: () => void;
  changeRecoveryPasswordData: IChangeRecoveryPassword;
  changeRecoveryPasswordErrors: { [name: string]: string };
  changeRecoveryPasswordSuccess: boolean;
}

export default (props: IChangeRecoveryPasswordFormProps) => {
  const {
    labels,
    backToLogin,
    changeRecoveryPasswordData,
    changeRecoveryPassword,
    onChangeRecoveryPasswordInput,
    changeRecoveryPasswordErrors,
    changeRecoveryPasswordSuccess
  } = props;
  if (changeRecoveryPasswordSuccess) {
    return (
      <div className="login-form-container p-t-s">
        <div className="width-100 flex-middle flex-center p-b-lg">
          <h1 className="size-3 strong">{labels.RECOVERY_PASSWORD_SUCCESS_TITLE}</h1>
          <p>{labels.RECOVERY_PASSWORD_SUCCESS_DESCRIPTION}</p>
        </div>
        <div className="flex-row m-b flex-end">
          <div className="col-s12p-none">
            <ButtonComponent onClick={() => backToLogin()} text={labels.LOGIN} justifyBtn={true} type="primary" />
          </div>
        </div>
      </div>
    );
  }
  const onSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="login-form-container p-t-s">
      <form onSubmit={onSubmit}>
        <div className="width-100">
          <InputComponent
            id="password"
            onChange={onChangeRecoveryPasswordInput}
            label={labels.PASSWORD_LABEL}
            placeholder={labels.PASSWORD_PLACEHOLDER}
            error={changeRecoveryPasswordErrors.password}
            value={changeRecoveryPasswordData.password}
            type="password"
          />
        </div>
        <div className="width-100">
          <InputComponent
            id="confirmPassword"
            onChange={onChangeRecoveryPasswordInput}
            label={labels.REPEAT_PASSWORD}
            placeholder={labels.PASSWORD_PLACEHOLDER}
            error={changeRecoveryPasswordErrors.confirmPassword}
            value={changeRecoveryPasswordData.confirmPassword}
            type="password"
          />
        </div>
        <div className="flex-row m-b flex-middle">
          <div
            className="col-s12 col-m6 p-none align-center-small m-t m-b text-primary cursor-pointer"
            onClick={() => backToLogin()}
          >
            {labels.BACK_TO_LOGIN}
          </div>
          <div className="col-s12 col-m6 p-none">
            <ButtonComponent
              summitButton={true}
              visualDisable={!validateCompleteData(changeRecoveryPasswordData, ['password', 'confirmPassword'])}
              onClick={() => changeRecoveryPassword()}
              text={labels.CHANGE_PASSWORD}
              justifyBtn={true}
              type="primary"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
