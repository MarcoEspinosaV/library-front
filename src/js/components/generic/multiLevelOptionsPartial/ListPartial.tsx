import * as React from 'react';
import { ICONS } from '../../../constants/images';
import ItemListPartial from './ItemListPartial';

interface IChildrenOption {
  id: string;
  name?: string;
  name_en_US?: string;
  name_es_EC?: string;
}

interface IOptions {
  id: string;
  name?: string;
  name_en_US?: string;
  name_es_EC?: string;
  topLabel?: string;
  topLabel_en_US?: string;
  topLabel_es_EC?: string;
  children?: IChildrenOption[];
}

interface IValueOptions {
  id: string;
  children?: string[];
}

interface IProps {
  selectAllLabel?: string;
  isOpen: boolean;
  options: IOptions[];
  values: IValueOptions[];
  isMultiSelect?: boolean;
  changeValue: (value: string, isParent?: boolean, parentId?: string) => void;
  language?: string;
  isSelectAll: boolean;
  valuesStringArray?: string[];
}

export default class ListPartial extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  getValue = (key: number): any => {
    const { values, options } = this.props;
    let response = null;
    if (values) {
      values.map(value => {
        if (value.id === options[key].id) {
          response = value;
        }
      });
    }
    return response;
  };
  render() {
    const {
      options,
      isOpen,
      isMultiSelect,
      changeValue,
      language,
      selectAllLabel,
      isSelectAll,
      valuesStringArray
    } = this.props;
    const style = [isOpen ? 'active' : '', 'options-list', 'width-100', 'p-t', 'p-b-s', 'scroll-area'].join(' ');
    return (
      <div className={style}>
        {selectAllLabel && isMultiSelect && (
          <div className="flex-row flex-no-wrap p-l m-b cursor-pointer" onClick={() => changeValue('select-all')}>
            <img src={isSelectAll ? ICONS.SELECT : ICONS.NO_SELECT} className="icon-extra-extra-small m-r-s" />
            <div className="primary-font text-secondary">{selectAllLabel}</div>
          </div>
        )}
        {options.map((option, key) => (
          <div key={key}>
            <ItemListPartial
              value={this.getValue(key)}
              valueString={valuesStringArray}
              changeValue={changeValue}
              option={option}
              disable={!isMultiSelect}
              noBorder={key === options.length - 1}
              language={language}
            />
          </div>
        ))}
      </div>
    );
  }
}
