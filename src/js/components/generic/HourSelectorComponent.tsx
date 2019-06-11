import * as React from 'react';

import { AM_PM_OPTION } from '../../constants/appEnums';
import { ICONS } from '../../constants/images';
import { SvgImport } from '../../utils/ImgUtils';
import { SelectComponent } from './SelectComponent';

type styleHourSelector = 'FULL';

interface IHourSelectorComponent {
  label?: string;
  placeholder?: string;
  value: any;
  onChangeInput: (key?: string, value?: any) => void;
  error?: string;
  subLabel?: boolean;
  amPmOption?: boolean;
  language?: string;
  style?: styleHourSelector;
}

export default class HourSelectorComponent extends React.Component<IHourSelectorComponent> {
  constructor(props: IHourSelectorComponent) {
    super(props);
  }
  render() {
    const hourOptions = () => {
      const hours = [];
      for (let i = 1; i <= 12; i++) {
        hours.push({
          id: i,
          value: i < 10 ? '0' + i : i.toString()
        });
      }
      return hours;
    };
    const minuteOptions = () => {
      const minutes = [];
      for (let i = 1; i < 60; i += 15) {
        minutes.push({
          id: i,
          value: (i === 1 ? '00' : i - 1).toString()
        });
      }
      return minutes;
    };
    const { placeholder, label, value, onChangeInput, error, subLabel, amPmOption, language, style } = this.props;
    return (
      <div className={`hour-selector container ${style ? style : ''}`}>
        {label && (
          <div
            className={`label text-uppercase small letter-spacing-1x strong ${
              error ? 'text-warning' : 'text-secondary text-lighten-1'
            }`}
          >
            {label}
          </div>
        )}
        {error && <SvgImport icon={ICONS.WARNING} className="icon-error icon-extra-small fill-warning" />}
        <div className="row">
          <div className={`p-r p-l-none ${amPmOption ? 'col-s4' : 'col-s6'}`}>
            <SelectComponent
              id="hour"
              noDataText=""
              options={hourOptions()}
              onChange={(key, data) => onChangeInput(key, data.value)}
              placeholder={placeholder && placeholder.split('-')[0]}
              value={value.hour}
              selectType={style === 'FULL' ? 'DATE_FULL' : 'DATE'}
              error={error}
            />
          </div>
          <div className={`p-r p-l-none ${amPmOption ? 'col-s4' : 'col-s6'}`}>
            <SelectComponent
              id="minute"
              noDataText=""
              options={minuteOptions()}
              onChange={(key, data) => onChangeInput(key, data.value)}
              placeholder={placeholder && placeholder.split('-')[1]}
              value={value.minute}
              selectType={style === 'FULL' ? 'DATE_FULL' : 'DATE'}
              error={error}
            />
          </div>
          {amPmOption && (
            <div className="p-r p-l-none col-s4">
              <SelectComponent
                id="period"
                noDataText=""
                options={Object.keys(AM_PM_OPTION).map(item => AM_PM_OPTION[item])}
                onChange={(key, data) => onChangeInput(key, data[`name_${language}`])}
                optionKeyValue={'name'}
                language={language}
                placeholder={placeholder && placeholder.split('-')[2]}
                value={value.period}
                error={error}
                selectType={style === 'FULL' ? 'SIMPLE' : 'EDITABLE'}
              />
            </div>
          )}
        </div>
        {subLabel && !error && (
          <div className="text-secondary text-lighten-2 secondary-font align-right size-extra-small subLabel">
            {placeholder.replace('-', ':').slice(0, 5)}
          </div>
        )}
        {error && <div className="error-label size-extra-small text-warning primary-font">{error}</div>}
      </div>
    );
  }
}
