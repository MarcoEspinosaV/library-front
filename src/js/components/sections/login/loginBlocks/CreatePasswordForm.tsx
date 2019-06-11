import * as React from 'react';

import { ILoginLanguage } from '../../../../languages/es_EC/login';
import { validateCompleteData } from '../../../../utils/ValidationUtils';
import ButtonComponent from '../../../generic/ButtonComponent';
import InputComponent from '../../../generic/InputComponent';

interface ICreatePasswordForm {
  labels: ILoginLanguage;
  onChangeCreatePasswordInput: (key: string, value: string) => void;
  recoveryPasswordErrors: { [name: string]: string };
  invitationInvalidToken: boolean;
  invitationTokenData: any;
  createPasswordData: any;
  createPassword: () => void;
  backToLogin: () => void;
  login: () => void;
}

export default (props: ICreatePasswordForm) => {
  const {
    labels,
    invitationInvalidToken,
    recoveryPasswordErrors,
    onChangeCreatePasswordInput,
    createPasswordData,
    login,
    backToLogin
  } = props;
  if (invitationInvalidToken) {
    return (
      <div className="login-form-container p-t-s">
        <div className="width-100">{labels.INVALID_INVITATION_TOKEN_DESCRIPTION}</div>
        <div className="width-100">
          <div
            className="col-s12 col-m6 p-none align-center-small m-t m-b text-primary cursor-pointer"
            onClick={() => backToLogin()}
          >
            {labels.BACK_TO_LOGIN}
          </div>
        </div>
      </div>
    );
  }
  const onSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <form className="login-form-container p-t-s" onSubmit={onSubmit}>
      <div className="width-100">
        <InputComponent
          id="password"
          onChange={onChangeCreatePasswordInput}
          label={labels.PASSWORD_LABEL}
          placeholder={''}
          inputType="FULL"
          error={recoveryPasswordErrors.password}
          value={createPasswordData.password}
          type="password"
          onKeyPress={() => null}
        />
      </div>
      <div className="width-100 m-b">
        <InputComponent
          id="passwordRepeat"
          onChange={onChangeCreatePasswordInput}
          label={labels.REPEAT_PASSWORD}
          placeholder={labels.PASSWORD_PLACEHOLDER}
          inputType="FULL"
          error={recoveryPasswordErrors.password}
          value={createPasswordData.passwordRepeat}
          type="password"
          onKeyPress={() => null}
        />
      </div>
      <div className={`flex-row m-b flex-middle ${'flex-end'}`}>
        <div className="col-s12 col-m6 p-none">
          <ButtonComponent
            summitButton={true}
            visualDisable={!validateCompleteData(createPasswordData, ['password', 'passwordRepeat'])}
            onClick={() => login()}
            text={labels.NEXT}
            justifyBtn={true}
            type="primary"
          />
        </div>
      </div>
    </form>
  );
};
