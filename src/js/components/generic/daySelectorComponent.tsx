import * as React from 'react';

import HourSelectorComponent from './HourSelectorComponent';
import { SelectComponent } from './SelectComponent';

interface IDaySelectorComponent {
  language: string;
  onChangeInput: (key?: string, value?: string) => void;
  startHour?: boolean;
  endHour?: boolean;
  label?: string;
  selectDayPlaceholder?: string;
  hourPlaceholder?: string;
  optionDaysEnum: Array<{}>;
  labelStarHour?: string;
  labelEndHour?: string;
  labelDay?: string;
  value: any;
  errorKey?: string;
  errorIndex?: number;
  error?: { [name: string]: string };
  subLabel?: boolean;
  amPmOption?: boolean;
}

export default class DaySelectorComponent extends React.Component<IDaySelectorComponent> {
  private myRef: any = React.createRef();
  constructor(props: IDaySelectorComponent) {
    super(props);
  }
  render() {
    const {
      language,
      onChangeInput,
      startHour,
      endHour,
      label,
      selectDayPlaceholder,
      hourPlaceholder,
      optionDaysEnum,
      labelEndHour,
      labelStarHour,
      labelDay,
      value,
      error,
      errorIndex,
      errorKey,
      subLabel,
      amPmOption
    } = this.props;
    return (
      <div className="day-selector-component container" ref={this.myRef}>
        {label && (
          <label htmlFor="selector-content">
            <span className="size-4 strong secondary-font text-secondary">{label}</span>
          </label>
        )}
        <div className="row" id="selector-content">
          <div
            className={`col-s12 p-none ${this.myRef.current &&
              this.myRef.current.offsetParent.clientWidth > 720 &&
              (startHour || endHour) &&
              'col-l6'}`}
          >
            <SelectComponent
              id="day"
              label={labelDay}
              noDataText=""
              placeholder={selectDayPlaceholder}
              options={optionDaysEnum}
              onChange={(key, data) => onChangeInput(key, data[`name_${language}`])}
              optionKeyValue="name"
              language={language}
              value={value.day ? value.day : typeof value === 'string' ? value : ''}
              error={error[`${errorKey}.${errorIndex}.day`]}
            />
          </div>
          {startHour && (
            <div
              className={`col-s6 p-none ${this.myRef.current &&
                this.myRef.current.offsetParent.clientWidth > 720 &&
                'col-l3'}`}
            >
              <HourSelectorComponent
                label={labelStarHour}
                placeholder={hourPlaceholder}
                onChangeInput={(key, data) => onChangeInput(key + 'From', data)}
                value={{ hour: value.hourFrom, minute: value.minuteFrom, period: value.periodFrom }}
                error={error[`${errorKey}.${errorIndex}.hourFrom`]}
                subLabel={true}
                amPmOption={amPmOption}
                language={language}
              />
            </div>
          )}
          {endHour && (
            <div
              className={`col-s6 p-none ${this.myRef.current &&
                this.myRef.current.offsetParent.clientWidth > 720 &&
                'col-l3'}`}
            >
              <HourSelectorComponent
                label={labelEndHour}
                placeholder={hourPlaceholder}
                onChangeInput={(key, data) => onChangeInput(key + 'To', data)}
                value={{ hour: value.hourTo, minute: value.minuteTo, period: value.periodTo }}
                error={error[`${errorKey}.${errorIndex}.hourTo`]}
                subLabel={true}
                amPmOption={amPmOption}
                language={language}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}
