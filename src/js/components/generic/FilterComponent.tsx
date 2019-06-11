import * as React from 'react';
import { IEnum } from '../../constants/appEnums';
import { ICONS } from '../../constants/images';
import { SvgImport } from '../../utils/ImgUtils';

interface IFilterComponent {
  label: string;
  icon: any;
  disable?: boolean;
  inputPlaceHolder: string;
  options: IEnum[];
  values: Array<string | number>;
  onSelect: (item: IEnum) => void;
  optionsKeyValueForFilter?: string;
  range?: boolean;
  minRange?: string;
  maxRange?: string;
  labelRange?: string;
}

export default class FilterComponent extends React.Component<IFilterComponent, any> {
  private optionContainer: any = React.createRef();
  constructor(props: IFilterComponent) {
    super(props);
    this.state = {
      isOpen: false,
      optionTop: '',
      searchValue: ''
    };
  }
  toggleOption = (e: any) => {
    const optionTop = e.clientY < window.innerHeight / 2;
    this.setState({
      isOpen: !this.state.isOpen,
      optionTop: !optionTop,
      searchValue: ''
    });
  };
  closeDropDown = () => {
    this.setState({
      isOpen: false
    });
  };
  getOptionList = (): IEnum[] => {
    if (!this.state.searchValue) {
      return this.props.options;
    }
    return this.props.options.filter((item: any) => {
      if (item.firstName.toLowerCase().includes(this.state.searchValue.toLowerCase())) {
        return item;
      }
    });
  };
  filterItems = (searchValue: string) => {
    this.setState({
      searchValue
    });
  };
  handlerOnClick = (e: any) => {
    if (this.optionContainer.current && !this.optionContainer.current.contains(event.target)) {
      this.setState({
        isOpen: false,
        searchValue: ''
      });
    }
  };
  componentDidMount() {
    document.addEventListener('click', this.handlerOnClick);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handlerOnClick);
  }
  render() {
    const {
      icon,
      label,
      inputPlaceHolder,
      values,
      onSelect,
      optionsKeyValueForFilter,
      range,
      minRange,
      maxRange,
      labelRange,
      disable
    } = this.props;
    return (
      <div className={`filter relative ${disable && 'disable-content'}`} ref={this.optionContainer}>
        <div className="filter-btn btn small-btn p-l p-r" onClick={e => !disable && this.toggleOption(e)}>
          <div className="flex-row text-uppercase relative flex-middle">
            <span>{label}</span>
            <SvgImport icon={icon} className="icon-filter-btn m-l flex-row fill-secondary" />
          </div>
        </div>
        <div
          className={`filter-list border bg-white p-all ${this.state.isOpen && 'active'} ${this.state.optionTop &&
            'top'}`}
        >
          <input
            type="text"
            placeholder={inputPlaceHolder}
            className="search-filter border m-b p-l"
            value={this.state.searchValue}
            onChange={e => this.filterItems(e.target.value)}
          />
          <div className="content-filter-list app-scroll">
            {this.getOptionList().map((item: any, key: number) => (
              <div className="filter-list-item m-b-s flex-row cursor-pointer" key={key} onClick={() => onSelect(item)}>
                <img
                  src={values.includes(optionsKeyValueForFilter) ? ICONS.SELECT : ICONS.NO_SELECT}
                  className="icon-extra-small m-r-s"
                />
                <span>{item.firstName}</span>
              </div>
            ))}
            {labelRange && (
              <label
                htmlFor="range"
                className="secondary-font text-uppercase small letter-spacing-1x text-secondary text-lighten-1 strong"
              >
                {labelRange}
              </label>
            )}
            {range && minRange && maxRange && (
              <input type="range" className="range-input" id="range" max={maxRange} min={minRange} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
