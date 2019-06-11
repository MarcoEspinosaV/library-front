import * as React from 'react';
import { ICONS } from '../../constants/images';
import { SvgImport } from '../../utils/ImgUtils';

interface IOptionsPaymentSelector {
  options: Array<{}>;
  value: string[] | string;
  selectOption: (index: number, id: string) => void;
  error?: string;
  label?: string;
  extraInformationLabels?: any;
  isSimpleSelector?: boolean;
  largeLabel?: boolean;
}

export default class OptionsPaymentSelector extends React.Component<IOptionsPaymentSelector> {
  constructor(props: IOptionsPaymentSelector) {
    super(props);
  }
  render() {
    const {
      options,
      value,
      selectOption,
      label,
      extraInformationLabels,
      error,
      isSimpleSelector,
      largeLabel
    } = this.props;
    return (
      <div className="options-payment-selector">
        {label && (
          <div className={`secondary-font strong text-secondary m-t m-b-lg ${largeLabel && 'size-4'}`}>{label}</div>
        )}
        {options.map((item: any, key: number) => (
          <div
            key={key}
            onClick={() => selectOption(key, item.id)}
            className={`option-item m-b-lg p-b ${
              key === options.length - 1 ? '' : 'border-b border-secondary border-lighten-3'
            }`}
          >
            <div className="flex-row">
              <img
                src={
                  value.includes(item.id) && isSimpleSelector
                    ? ICONS.RADIO_SELECTED
                    : value.includes(item.id)
                    ? ICONS.SELECT
                    : error
                    ? ICONS.WARNING_CIRCLE_ICON
                    : ICONS.NO_SELECT
                }
                className="icon-small cursor-pointer"
              />
              <span className="primary-font text-secondary m-none m-l-s size-h4 letter-spacing-0">{item.name}</span>
            </div>
            {extraInformationLabels && item.quotaNumber && item.quotas && (
              <div className="flex-row flex-middle p-l-lg">
                <div className="text-secondary small strong text-lighten-1 line-height-large">
                  {extraInformationLabels.PAYMENTS + ': '}
                </div>
                <span className="extra-information-text text-secondary small text-lighten-1">{item.quotaNumber}</span>
                <div className="text-secondary small strong text-lighten-1 line-height-large">
                  {extraInformationLabels.WEIGHT + ': '}
                </div>
                {item.quotas.map((quota: any, index: number) => (
                  <span className="extra-information-text text-secondary small text-lighten-1" key={index}>
                    {quota.weight + '%'}
                  </span>
                ))}
                <div className="text-secondary small strong text-lighten-1 line-height-large">
                  {extraInformationLabels.EXPIRE + ': '}
                </div>
                {item.quotas.map((quota: any, index: number) => (
                  <span className="extra-information-text text-secondary small text-lighten-1" key={index}>
                    {quota.expireDate}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
        {error && <div className="error-label size-extra-small text-warning primary-font">{error}</div>}
      </div>
    );
  }
}
