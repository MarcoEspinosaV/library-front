import * as React from 'react';

import { GLOBAL_IMAGES } from '../../../constants/images';
import { IChangeRecoveryPasswordContainerProps } from '../../../containers/sections/login/ChangeRecoveryPasswordContainer';
import { SvgImport } from '../../../utils/ImgUtils';
import ButtonComponent from '../../generic/ButtonComponent';
import ChangeRecoveryPasswordForm from './loginBlocks/ChangeRecoveryPasswordForm';

export default class ChangeRecoveryPasswordView extends React.Component<IChangeRecoveryPasswordContainerProps, any> {
  componentDidMount(): void {
    this.props.validateRecoveryPasswordToken();
  }
  render() {
    const { labels, validRecoveryPasswordToken, backToLogin } = this.props;
    return (
      <div className="login flex-column flex-1 flex-middle flex-center">
        <div className="login-brand">
          <SvgImport icon={GLOBAL_IMAGES.BRAND} className="brand-image" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-s12 col-m6 align-right align-center-small m-b-medium-down p-none">
              <SvgImport className="children" icon={GLOBAL_IMAGES.CHILDREN} />
            </div>
            <div className="form-content col-s12 col-m6 p-none">
              <div className="width-100">
                <div>
                  <h1>{labels.CHANGE_PASSWORD}</h1>
                </div>
              </div>
              {!validRecoveryPasswordToken ? (
                <div className="login-form-container p-t-s">
                  <div className="width-100 flex-middle flex-center p-b-lg">
                    <h1 className="size-3 strong">{labels.INVALID_TOKEN_TITLE}</h1>
                    <p>{labels.INVALID_TOKEN_DESCRIPTION}</p>
                  </div>
                  <div className="flex-row m-b flex-end">
                    <div className="col-s12p-none">
                      <ButtonComponent
                        onClick={() => backToLogin()}
                        text={labels.LOGIN}
                        justifyBtn={true}
                        type="primary"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <ChangeRecoveryPasswordForm {...this.props} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
