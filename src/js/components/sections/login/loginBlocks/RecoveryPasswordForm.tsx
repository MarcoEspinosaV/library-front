import * as React from 'react';

import { ILoginLanguage } from '../../../../languages/es_EC/login';
import { IRecoveryPassword } from '../../../../reducers/loginReducer';
import { validateCompleteData } from '../../../../utils/ValidationUtils';
import ButtonComponent from '../../../generic/ButtonComponent';
import InputComponent from '../../../generic/InputComponent';

interface IRecoveryPasswordFormProps {
  labels: ILoginLanguage;
  onChangeRecoveryPasswordInput: (key: string, value: string) => void;
  recoveryPassword: () => void;
  setVisibleBackContent: (value: boolean) => void;
  recoveryPasswordData: IRecoveryPassword;
  recoveryPasswordErrors: { [name: string]: string };
  recoveryPasswordSuccess: boolean;
}

export default (props: IRecoveryPasswordFormProps) => {
  const {
    labels,
    recoveryPasswordData,
    recoveryPassword,
    onChangeRecoveryPasswordInput,
    recoveryPasswordErrors,
    recoveryPasswordSuccess,
    setVisibleBackContent
  } = props;
  if (recoveryPasswordSuccess) {
    return (
      <div className="login-form-container p-t-s">
        <div className="width-100 flex-middle flex-center p-b-lg">
          <h1 className="size-3 strong">{labels.SUCCESS_SEND_TITLE}</h1>
          <p>{labels.SUCCESS_SEND_MESSAGE}</p>
        </div>
        <div className="flex-row m-b flex-end">
          <div className="col-s12p-none">
            <ButtonComponent
              onClick={() => setVisibleBackContent(false)}
              text={labels.LOGIN}
              justifyBtn={true}
              type="primary"
            />
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
            id="email"
            onChange={onChangeRecoveryPasswordInput}
            label={labels.EMAIL_LABEL}
            placeholder={labels.EMAIL_PLACEHOLDER}
            error={recoveryPasswordErrors.email}
            value={recoveryPasswordData.email}
            type="email"
            onKeyPress={() => null}
          />
        </div>
        <div className="flex-row m-b flex-middle">
          <div
            className="col-s12 col-m6 p-none align-center-small m-t m-b text-primary cursor-pointer"
            onClick={() => setVisibleBackContent(false)}
          >
            {labels.LOGIN}
          </div>
          <div className="col-s12 col-m6 p-none">
            <ButtonComponent
              summitButton={true}
              visualDisable={!validateCompleteData(recoveryPasswordData, ['email'])}
              onClick={() => recoveryPassword()}
              text={labels.RECOVERY_PASSWORD_BUTTON}
              justifyBtn={true}
              type="primary"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
