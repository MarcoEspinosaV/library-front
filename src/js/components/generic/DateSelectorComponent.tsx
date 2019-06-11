import moment = require('moment');
import * as React from 'react';

import { ICONS } from '../../constants/images';
import { SvgImport } from '../../utils/ImgUtils';
import { SelectComponent } from './SelectComponent';

type IDateFormat = 'DD-MM-YYYY' | 'MM-YYYY' | 'YYYY-MM' | 'YYYY-MM-DD';
type ITypeFormat = 'FULL';

interface IDataSelectorComponent {
  startDate?: string;
  finishDate?: string;
  onSelect: (value?: any) => void;
  label?: string;
  id: string;
  required?: boolean;
  objectDate?: boolean;
  value: string;
  error?: string;
  monthError?: string;
  dayError?: string;
  yearError?: string;
  dateFormat: IDateFormat;
  placeholder: string;
  type?: ITypeFormat;
  className?: string;
  labelClass?: string;
  subLabel?: boolean;
  datesRange?: boolean;
  reverseYears?: boolean;
  datesRangeValues?: {
    from: number;
    to: number;
  };
}

export const DateSelectorComponent = (props: IDataSelectorComponent) => {
  interface IMinMaxDate {
    maxDate: any;
    minDate: any;
    dateObject: {
      minDate: {
        DD: number;
        MM: number;
        YYYY: number;
      };
      maxDate: {
        DD: number;
        MM: number;
        YYYY: number;
      };
    };
  }
  const {
    label,
    id,
    required,
    value,
    startDate,
    finishDate,
    onSelect,
    objectDate,
    error,
    dateFormat,
    placeholder,
    type,
    className,
    labelClass,
    subLabel,
    datesRangeValues,
    reverseYears
  } = props;
  const getMinMaxDate = (): IMinMaxDate => {
    const date: any = {
      maxDate: finishDate ? moment(finishDate, dateFormat) : moment().add(10, 'years'),
      minDate: startDate ? moment(startDate, dateFormat) : moment().subtract(70, 'years')
    };
    date.dateObject = {
      maxDate: {
        DD: +date.maxDate.format('DD'),
        MM: +date.maxDate.format('MM'),
        YYYY: +date.maxDate.format('YYYY')
      },
      minDate: {
        DD: +date.minDate.format('DD'),
        MM: +date.minDate.format('MM'),
        YYYY: +date.minDate.format('YYYY')
      }
    };
    return date;
  };
  const referenceSelectDate = (): {
    date: any;
    referenceDate: { DD: number; MM: number; YYYY: number };
    currentDate: { DD: number; MM: number; YYYY: number };
  } => {
    const { maxDate, dateObject } = getMinMaxDate();
    if (value) {
      const date = value.split('-');
      const formatYearFirst = dateFormat === ('YYYY-MM' || 'YYYY-MM-DD');
      const formatOnlyYearMonth = dateFormat === 'YYYY-MM' || dateFormat === 'MM-YYYY';
      const year = formatYearFirst ? date[0] : date[formatOnlyYearMonth ? 1 : 2];
      const month = formatYearFirst ? date[1] : date[formatOnlyYearMonth ? 0 : 1];
      const day = formatYearFirst ? date[2] : date[formatOnlyYearMonth ? 2 : 0];
      const referenceYear = year || moment().format('YYYY');
      const referenceMonth = month || moment().format('MM');
      const referenceDay = day || moment().format('DD');
      return {
        currentDate: {
          DD: +day,
          MM: +month,
          YYYY: +year
        },
        date: moment(`${referenceYear}-${referenceMonth}-${referenceDay}`, 'YYYY-MM-DD'),
        referenceDate: {
          DD: +referenceDay,
          MM: +referenceMonth,
          YYYY: +referenceYear
        }
      };
    } else {
      return {
        currentDate: {
          DD: null,
          MM: null,
          YYYY: null
        },
        date: maxDate,
        referenceDate: dateObject.maxDate
      };
    }
  };
  const generateYears = () => {
    if (props.datesRange) {
      const rangeCount = datesRangeValues ? datesRangeValues.to - datesRangeValues.from + 1 : 15;
      return [...new Array(rangeCount)].map((item, key) => ({
        id: key + (datesRangeValues ? datesRangeValues.from : 1),
        value: key + (datesRangeValues ? datesRangeValues.from : 1)
      }));
    }
    const { dateObject } = getMinMaxDate();
    const yearsList = Array.apply(null, { length: dateObject.maxDate.YYYY - dateObject.minDate.YYYY + 1 }).map(
      (element: null, key: number) => {
        const year = +dateObject.minDate.YYYY + key;
        return {
          id: year,
          value: year.toString()
        };
      }
    );
    if (reverseYears) {
      return yearsList;
    }
    return yearsList.reverse();
  };
  const generateMonths = () => {
    if (props.datesRange) {
      return [...new Array(12)].map((item, key) => ({
        id: key + 1,
        value: key + 1
      }));
    }
    const { dateObject } = getMinMaxDate();
    const selectDateReference = referenceSelectDate();
    const totalLastMonths =
      selectDateReference.referenceDate.YYYY < dateObject.maxDate.YYYY ? 12 : dateObject.maxDate.MM;
    const isFirstMonth = selectDateReference.referenceDate.YYYY === dateObject.minDate.YYYY;
    const totalMonths = !isFirstMonth ? totalLastMonths : 13 - dateObject.minDate.MM;
    return Array.apply(null, { length: totalMonths }).map((element: null, key: number) => {
      const month = key + (!isFirstMonth ? 1 : dateObject.minDate.MM);
      return {
        id: month,
        value: month && +month < 10 ? `0${+month}` : month.toString()
      };
    });
  };
  const generateDays = () => {
    const { currentDate, date, referenceDate } = referenceSelectDate();
    const { dateObject } = getMinMaxDate();
    const totalMonthDays = date.daysInMonth();
    const isCurrentLastMont =
      currentDate.MM &&
      referenceDate.YYYY === dateObject.maxDate.YYYY &&
      referenceDate.MM === dateObject.maxDate.MM &&
      referenceDate.DD < totalMonthDays;
    const isCurrentFirstMont =
      currentDate.MM &&
      referenceDate.YYYY === dateObject.minDate.YYYY &&
      referenceDate.MM === dateObject.minDate.MM &&
      referenceDate.DD < totalMonthDays;
    const totalDays = isCurrentLastMont
      ? dateObject.maxDate.DD
      : isCurrentFirstMont
      ? referenceDate.DD
      : totalMonthDays;
    return Array.apply(null, { length: totalDays }).map((element: null, key: number) => {
      const day = key + (isCurrentFirstMont ? dateObject.minDate.DD : 1);
      return {
        id: day,
        value: day && +day < 10 ? `0${+day}` : day.toString()
      };
    });
  };
  const dateToString = (dateObject: { day: string; month: string; year: string }) => {
    const day = dateObject.day && +dateObject.day < 10 ? `0${+dateObject.day}` : dateObject.day;
    const month = dateObject.month && +dateObject.month < 10 ? `0${+dateObject.month}` : dateObject.month;
    switch (dateFormat) {
      case 'DD-MM-YYYY':
        return `${day}-${month}-${dateObject.year}`;
      case 'YYYY-MM-DD':
        return `${dateObject.year}-${month}-${day}`;
      case 'YYYY-MM':
        return `${dateObject.year}-${month}`;
      case 'MM-YYYY':
        return `${month}-${dateObject.year}`;
    }
  };
  const onChangeDate = (key: string, item: string) => {
    const { currentDate } = referenceSelectDate();
    const date: any = {
      day: currentDate.DD || '',
      month: currentDate.MM || '',
      year: currentDate.YYYY || ''
    };
    date[key] = item;
    if (objectDate) {
      onSelect({
        day: date.day,
        month: date.month,
        year: date.year
      });
    } else {
      onSelect(dateToString(date));
    }
  };
  const getView = (date: string, inputPlaceHolder?: string) => {
    const { currentDate } = referenceSelectDate();
    const columns = orderKeyFormat(dateFormat).split('-').length === 3 ? 'col-s4' : 'col-s6';
    switch (date) {
      case 'YYYY':
        return (
          <div className={`${type === 'FULL' ? 'p-none' : 'p-l-none p-r-s'} ${columns}`} key={1}>
            <SelectComponent
              id="year"
              noDataText=""
              placeholder={inputPlaceHolder || date}
              options={generateYears()}
              onChange={(key, item) => onChangeDate(key, item.value)}
              value={currentDate.YYYY}
              error={error}
              selectType={type ? 'DATE_FULL' : 'DATE'}
            />
          </div>
        );
      case 'MM':
        return (
          <div className={`${type === 'FULL' ? 'p-none' : 'p-l-none p-r-s'} ${columns}`} key={2}>
            <SelectComponent
              id="month"
              disable={!currentDate.YYYY}
              noDataText=""
              placeholder={inputPlaceHolder || date}
              options={generateMonths()}
              onChange={(key, item) => onChangeDate(key, item.value)}
              value={currentDate.MM && +currentDate.MM < 10 ? `0${currentDate.MM}` : currentDate.MM}
              error={error}
              selectType={type ? 'DATE_FULL' : 'DATE'}
            />
          </div>
        );
      case 'DD':
        return (
          <div className={`col-s4 p-l-none p-r-s`} key={3}>
            <SelectComponent
              id="day"
              disable={!currentDate.MM}
              noDataText=""
              placeholder={inputPlaceHolder || date}
              options={generateDays()}
              onChange={(key, item) => onChangeDate(key, item.value)}
              value={currentDate.DD && +currentDate.DD < 10 ? `0${currentDate.DD}` : currentDate.DD}
              error={error}
              selectType={type ? 'DATE_FULL' : 'DATE'}
            />
          </div>
        );
    }
  };
  const labelsArray = placeholder.split('-');
  const orderKeyFormat = (format: string) => {
    switch (format) {
      case 'DD-MM-YYYY':
        return 'YYYY-MM-DD';
      case 'MM-YYYY':
        return 'YYYY-MM';
      case 'YYYY-MM':
        return 'YYYY-MM';
      case 'YYYY-MM-DD':
        return 'YYYY-MM-DD';
    }
  };
  const classLabel = labelClass
    ? [labelClass, error ? 'label-error' : ''].join(' ')
    : [
        error ? 'label-error' : '',
        'label',
        'secondary-font',
        'small',
        'flex-row',
        'text-secondary',
        'strong',
        'text-lighten-1',
        type === 'FULL' ? 'truncate' : 'letter-spacing-1x text-uppercase'
      ].join(' ');
  return (
    <div className={`date-selector relative width-100 m-t m-b-lg ${type} ${className} ${error ? 'error' : ''}`}>
      {label && (
        <label className={classLabel} htmlFor={id}>
          {label}
          <span>{required && ' *'}</span>
          <span className={`flex-column error-icon ${error ? 'active-error-icon' : ''}`}>
            <SvgImport className="icon-extra-small fill-warning" icon={ICONS.WARNING} />
          </span>
        </label>
      )}
      <div id={id} className="flex-row">
        {orderKeyFormat(dateFormat)
          .split('-')
          .map((date, key) => getView(date, labelsArray[key]))}
        {!error && subLabel && (
          <span className="size-extra-small block width-100 secondary-font text-secondary truncate subLabel align-right text-lighten-2">
            {placeholder.replace('-', ':').replace('-', ':')}
          </span>
        )}
        <span className="size-extra-small block width-100 secondary-font text-warning truncate error align-right">
          {error}
        </span>
      </div>
    </div>
  );
};
