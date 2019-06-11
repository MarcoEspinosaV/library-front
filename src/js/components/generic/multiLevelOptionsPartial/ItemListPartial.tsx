import * as React from 'react';
import { ICONS } from '../../../constants/images';
import SubItemList from './SubItemPartial';

interface IValue {
  id: string;
  children?: string[];
}
interface IChildren {
  id: string;
  name?: string;
  name_en_US?: string;
  name_es_EC?: string;
}
interface IOption {
  id: string;
  name?: string;
  name_en_US?: string;
  name_es_EC?: string;
  topLabel?: string;
  topLabel_en_US?: string;
  topLabel_es_EC?: string;
  children?: IChildren[];
}
interface IProps {
  value: IValue;
  option: IOption;
  disable?: boolean;
  changeValue: (value: string, isParent?: boolean, parentId?: string) => void;
  focused?: boolean;
  noBorder?: boolean;
  language?: string;
  valueString?: string[];
}

interface IState {
  hovered: boolean;
  checked: boolean;
}

export default class ItemListPartial extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      checked: false,
      hovered: false
    };
  }
  handleFocus = () => {
    this.setState({ hovered: true });
  };
  handleBlur = () => {
    this.setState({ hovered: false });
  };
  render() {
    const { value, disable, changeValue, noBorder, language, valueString } = this.props;
    const option = () => {
      const newItem: any = { ...this.props.option };
      newItem.topLabel = language ? newItem[`topLabel${language}`] : newItem.topLabel;
      newItem.name = language ? newItem[`name${language}`] : newItem.name;
      newItem.children = newItem.children.map((item: any) => {
        return {
          id: item.id,
          name: language ? item[`name${language}`] : item.name
        };
      });
      return newItem;
    };
    const { hovered } = this.state;
    const style = [
      disable ? 'text-lighten-1' : 'cursor-pointer',
      'item-list',
      'primary-font',
      'text-secondary',
      'flex-row',
      'flex-no-wrap',
      'border-b',
      'border-lighten-3',
      'border-secondary',
      'm-l',
      'm-r',
      'p-t-s',
      'p-b-s'
    ].join(' ');
    return (
      <div>
        {option().topLabel && (
          <div className="small secondary-font text-secondary text-uppercase text-lighten-1 letter-spacing-1x strong p-l">
            {option().topLabel}
          </div>
        )}
        <div
          className={`${hovered && !disable ? 'bg-secondary bg-lighten-5' : ''} parent-item-list`}
          onMouseEnter={this.handleFocus}
          onMouseLeave={this.handleBlur}
          tabIndex={-1}
          onClick={() => (disable ? null : changeValue(option().id, true))}
        >
          <div className={style}>
            {!disable && (
              <img
                src={value && value.children.length === option().children.length ? ICONS.SELECT : ICONS.NO_SELECT}
                className="icon-extra-small"
              />
            )}
            <div className={`${!disable && 'p-l-s'} width-100`}>{option().name}</div>
          </div>
        </div>
        {option().children.map((children: any, key: number) => (
          <div key={key}>
            <SubItemList
              option={children}
              changeValue={(value1, isParent) => changeValue(value1, isParent, option().id)}
              value={
                value && value.children && value.children.includes(children.id)
                  ? children.id
                  : valueString && valueString.includes(children.id)
                  ? children.id
                  : ''
              }
              multiple={!disable}
              noBorder={noBorder && key === option().children.length - 1}
            />
          </div>
        ))}
      </div>
    );
  }
}
