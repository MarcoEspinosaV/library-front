import * as React from 'react';

import { ILoginLanguage } from '../../../../languages/es_EC/login';
import { ILogin } from '../../../../reducers/loginReducer';
import { validateCompleteData } from '../../../../utils/ValidationUtils';
import ButtonComponent from '../../../generic/ButtonComponent';
import InputComponent from '../../../generic/InputComponent';
import {Link} from "react-router-dom";
import {ROUTES} from "../../../../routes";

interface ILoginFormProps {
  labels: ILoginLanguage;
  onChangeLoginInput: (key: string, value: string) => void;
  login: () => void;
  setVisibleBackContent: (value: boolean) => void;
  loginErrors: { [name: string]: string };
  loginData: ILogin;
}

export default (props: ILoginFormProps) => {
  const { onChangeLoginInput, labels, setVisibleBackContent, login, loginData, loginErrors } = props;
  const onSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="login-form-container p-t-s">
      <form onSubmit={onSubmit}>
        <div className="width-100">
          <InputComponent
            id="email"
            onChange={onChangeLoginInput}
            label={labels.EMAIL_LABEL}
            placeholder={labels.EMAIL_PLACEHOLDER}
            error={loginErrors.email}
            value={loginData.email}
            onKeyPress={() => null}
          />
        </div>
        <div className="width-100 m-b">
          <InputComponent
            id="password"
            onChange={onChangeLoginInput}
            label={labels.PASSWORD_LABEL}
            placeholder={labels.PASSWORD_PLACEHOLDER}
            error={loginErrors.password}
            value={loginData.password}
            type="password"
            onKeyPress={() => null}
          />
        </div>
        <div className={`flex-row m-b flex-middle ${'flex-end'}`}>
          <div
            className="col-s12 col-m6 p-none align-center-small m-t m-b text-primary cursor-pointer"
            onClick={() => setVisibleBackContent(true)}
          >
            {labels.FORGET_PASSWORD}
          </div>
          <div className="col-s12 col-m6 p-none">
            <a href={ROUTES.HOME.path} className="btn bg-primary text-white">{labels.LOGIN_BUTTON}</a>
          </div>
        </div>
      </form>
    </div>
  );
};
