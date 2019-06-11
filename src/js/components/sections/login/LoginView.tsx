import * as React from 'react';

import { GLOBAL_IMAGES } from '../../../constants/images';
import { ILoginContainerProps } from '../../../containers/sections/login/LoginContainer';
import { SvgImport } from '../../../utils/ImgUtils';
import { TextWithVariables } from '../../../utils/TextWithVariables';
import FlipContentComponent from '../../generic/FlipContentComponent';
import CreatePasswordForm from './loginBlocks/CreatePasswordForm';
import LoginForm from './loginBlocks/LoginForm';
import RecoveryPasswordForm from './loginBlocks/RecoveryPasswordForm';

export default class LoginView extends React.Component<ILoginContainerProps, any> {
  constructor(props: ILoginContainerProps) {
    super(props);
    this.state = {
      visibleBackContent: false
    };
  }
  componentDidMount() {
    if (this.props.urlSchoolName) {
      this.props.getSchoolAndParentUser();
    }
    if (this.props.recoveryPasswordQueryParams) {
      this.setState({
        visibleBackContent: true
      });
    }
  }

  setVisibleBackContent = (status: boolean) => {
    this.setState({
      visibleBackContent: status
    });
  };
  render() {
    const { labels, urlSchoolName, invitationTokenData, invitationUrlToken, invitationInvalidToken } = this.props;
    return (
      <div className="login flex-column flex-1 flex-middle flex-center">
        <div className="login-brand">
          <img src={GLOBAL_IMAGES.BRAND} className="brand-image"/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-s12 col-m6 align-right align-center-small m-b-medium-down p-none">
              <img src={GLOBAL_IMAGES.LIBRARY} className="children"/>
            </div>
            <div className="form-content col-s12 col-m6 p-none">
              <div className="width-100">
                {!urlSchoolName ? (
                  <h1>{!this.state.visibleBackContent ? labels.LOGIN : labels.RECOVERY_PASSWORD}</h1>
                ) : (
                  <div>
                    <h1>{`¡${labels.HELLO} ${invitationTokenData.user.firstName}!`}</h1>
                    <h1>{labels.WELCOME_TO_LIBRARY}</h1>
                  </div>
                )}
              </div>
              {!this.state.visibleBackContent && (
                <div
                  className={`width-100 text-secondary line-height-large ${
                    invitationTokenData.user.firstName ? 'size-4 m-t' : 'text-lighten-1'
                  }`}
                >
                  {invitationUrlToken
                    ? urlSchoolName
                      ? `${invitationTokenData.school.name} ${
                          !invitationInvalidToken ? labels.SCHOOL_SENDING_INVITATION : ''
                        }`
                      : labels.CREATE_PASSWORD
                    : urlSchoolName
                    ? TextWithVariables(labels.ACCESS_SCHOOL, { schoolName: invitationTokenData.school.name })
                    : labels.ACCESS_TO_ACCOUNT}
                </div>
              )}
              {urlSchoolName && invitationUrlToken && !invitationTokenData.user.changedPassword ? (
                <CreatePasswordForm {...this.props} />
              ) : (
                <FlipContentComponent
                  type="intro"
                  visibleBackContent={this.state.visibleBackContent}
                  frontContent={<LoginForm {...this.props} setVisibleBackContent={this.setVisibleBackContent} />}
                  backContent={
                    <RecoveryPasswordForm {...this.props} setVisibleBackContent={this.setVisibleBackContent} />
                  }
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
