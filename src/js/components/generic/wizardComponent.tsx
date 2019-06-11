import * as React from 'react';

import { ICONS } from '../../constants/images';
import { SvgImport } from '../../utils/ImgUtils';

interface IStepsItem {
  id: number;
  value: string;
}
interface IWizardComponent {
  steps: IStepsItem[];
  currentStep: number;
  className?: string;
}

export default class WizardComponent extends React.Component<IWizardComponent> {
  constructor(props: IWizardComponent) {
    super(props);
  }

  render() {
    const { steps, currentStep, className } = this.props;
    return (
      <div className={`wizard-component radius p-r p-l p-t-lg p-b shadow-1 m-b ${className} bg-white`}>
        {steps.map((item, key) => (
          <div className="step-item flex-row m-b flex-middle flex-no-wrap" key={key}>
            {currentStep > key + 1 ? (
              <span className="align-center">
                <SvgImport icon={ICONS.SUCCESS} className="icon-step-complete" />
              </span>
            ) : (
              <span
                className={`number-step-item align-center small secondary-font strong ${currentStep === key + 1 &&
                  'active'}`}
              >
                {item.id}
              </span>
            )}
            <div
              className={`strong letter-spacing-1x truncate m-l text-step-item text-uppercase
                            secondary-font small text-secondary ${currentStep !== key + 1 && `text-lighten-2`}`}
            >
              {item.value}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
