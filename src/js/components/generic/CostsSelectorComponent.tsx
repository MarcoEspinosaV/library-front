import * as React from 'react';

import { ICONS } from '../../constants/images';

export interface IProps {
  id: string;
  options: any[];
  maxWidth?: number;
  requiredCostsLabel: string;
  values: string[];
  onSelectOption: (id: string, values: string[]) => void;
  optionalCostsLabel: string;
  showTotalCost?: boolean;
  totalLabel?: string;
  initialDepositLabel?: string;
  initialDepositValue?: number;
}

export default class CostsSelectorComponent extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  selectOption = (idItem: string) => {
    const { onSelectOption, values, id } = this.props;
    const optionsSelected = [...values];
    if (optionsSelected.includes(idItem)) {
      optionsSelected.splice(optionsSelected.indexOf(idItem), 1);
    } else {
      optionsSelected.push(idItem);
    }
    return onSelectOption(id, optionsSelected);
  };
  render() {
    const {
      options,
      maxWidth,
      requiredCostsLabel,
      optionalCostsLabel,
      values,
      showTotalCost,
      totalLabel,
      initialDepositLabel,
      initialDepositValue
    } = this.props;
    const optionsRequired = options.filter(item => item.required);
    const optionsNoRequired = options.filter(item => !item.required);
    const costs = [...options];
    let totalCost = 0;
    costs.map(cost => {
      if (!cost.required && values.includes(cost.id)) {
        totalCost += cost.value;
      } else if (cost.required) {
        totalCost += cost.value;
      }
    });
    return (
      <div className="costs-selector-component" style={{ maxWidth: maxWidth ? maxWidth + 'px' : '100%' }}>
        <div className="secondary-font text-secondary strong size-4 m-b-s">{requiredCostsLabel}</div>
        {optionsRequired.map((item, key) => (
          <div key={key} className="cost-item primary-font text-secondary size-4 p-s-all">
            <div className="flex-row flex-middle">{item.name}</div>
            <div>{`$${item.value}`}</div>
          </div>
        ))}
        <div className="secondary-font text-secondary strong size-4 m-b-s m-t">{optionalCostsLabel}</div>
        {optionsNoRequired.map((item, key) => (
          <div key={key} className="cost-item primary-font text-secondary size-4 p-s-all">
            <div className="flex-row flex-middle">
              <img
                src={values.includes(item.id) ? ICONS.SELECT : ICONS.NO_SELECT}
                className="icon-small m-r cursor-pointer"
                onClick={() => this.selectOption(item.id)}
              />
              {item.name}
            </div>
            <div>{`$${item.value}`}</div>
          </div>
        ))}
        {showTotalCost && (
          <div
            className="m-t p-all p-l-s p-r-s secondary-font text-secondary size-4 strong flex-space-between bg-secondary
              bg-lighten-5 border-t border-secondary border-lighten-4"
            style={{ maxWidth: 800 }}
          >
            <div>{totalLabel}</div>
            <div>{`$${totalCost}`}</div>
          </div>
        )}
        {initialDepositValue && (
          <div className="flex-row flex-space-between primary-font size-4 p-all p-l-s p-r-s">
            <div>{initialDepositLabel}</div>
            <div>${initialDepositValue}</div>
          </div>
        )}
      </div>
    );
  }
}
