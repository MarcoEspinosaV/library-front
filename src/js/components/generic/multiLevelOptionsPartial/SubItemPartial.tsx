import * as React from 'react';
import { ICONS } from '../../../constants/images';

interface IChildren {
  id: string;
  name?: string;
}

interface IProps {
  value?: string;
  option: IChildren;
  multiple?: boolean;
  changeValue: (value: string, isParent?: boolean) => void;
  focused?: boolean;
  noBorder?: boolean;
}

interface IState {
  hovered: boolean;
}

export default class SubItemList extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      hovered: false
    };
  }
  handlerMouseLeave = () => {
    this.setState({ hovered: false });
  };
  handlerMouseEnter = () => {
    this.setState({ hovered: true });
  };
  render() {
    const { option, value, multiple, noBorder, changeValue } = this.props;
    const { hovered } = this.state;
    const subItemStyle = [
      'sub-item-list',
      'flex-row',
      'flex-nowrap',
      'm-l',
      'm-r',
      'p-t-s',
      'p-b-s',
      'cursor-pointer'
    ].join(' ');
    const spanTextStyle = ['text-secondary', 'primary-font', 'truncate', !multiple ? 'p-l-lg' : 'p-l-s'].join(' ');
    return (
      <div
        className={`${hovered ? 'bg-secondary bg-lighten-5' : ''} children-item-list`}
        onMouseLeave={this.handlerMouseLeave}
        onMouseEnter={this.handlerMouseEnter}
        tabIndex={-1}
        onClick={() => changeValue(option.id)}
      >
        <div className={`${subItemStyle} ${noBorder ? '' : 'border-secondary border-b border-lighten-3'}`}>
          {multiple && (
            <img src={value === option.id ? ICONS.SELECT : ICONS.NO_SELECT} className="p-l-lg icon-extra-small" />
          )}
          <span className={`${spanTextStyle} ${value === option.id && 'strong'}`}>{option.name}</span>
        </div>
      </div>
    );
  }
}
