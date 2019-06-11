import * as React from 'react';

import { ICONS } from '../../constants/images';
import { SvgImport } from '../../utils/ImgUtils';
import { getInitials } from '../../utils/StringUtils';

type typeSelectComponent = 'big-value';

interface ISelectorComponent {
  showSearch?: boolean;
  avatarStyle?: 'big';
  image?: any;
  imageText?: string;
  inputPlaceHolder?: string;
  options: Array<{ id: number | string; label?: string; value?: string }>;
  value?: string;
  label: string;
  onSelect: (data: any) => void;
  type?: typeSelectComponent;
}

export default class SelectorComponent extends React.Component<ISelectorComponent, any> {
  private optionContainer: any = React.createRef();
  constructor(props: ISelectorComponent) {
    super(props);
    this.state = {
      isOpen: false,
      optionTop: false,
      searchValue: ''
    };
  }
  onSelect = (item: any) => {
    this.setState({
      isOpen: false
    });
    this.props.onSelect(item);
  };
  toggleOption = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      /* optionTop: !optionTop, */
      searchValue: ''
    });
  };
  getOptionList = (): Array<{ id: number | string; label?: string; value?: string }> => {
    if (!this.state.searchValue) {
      return this.props.options;
    }
    return this.props.options.filter((item: any) => {
      const itemLabel = item.label || item.value;
      if (itemLabel.toLowerCase().includes(this.state.searchValue.toLowerCase())) {
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
    if (this.optionContainer.current && !this.optionContainer.current.contains(e.target)) {
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
    const { image, imageText, inputPlaceHolder, label, avatarStyle, value, showSearch, type } = this.props;
    const avatarClass = [
      'avatar-image',
      'flex-row',
      'flex-center',
      'flex-middle',
      'border',
      'border-secondary',
      'border-lighten-3',
      'bg-secondary',
      'bg-lighten-5',
      'm-r'
    ].join(' ');
    return (
      <div className={`selector ${type} relative width-100`} ref={this.optionContainer}>
        <div onClick={this.toggleOption}>
          <div className="flex-row relative flex-middle p-t p-b cursor-pointer width-100 selector-content">
            <div className="flex-column image-container">
              {(image || imageText) && (
                <div className={`${avatarClass} ${avatarStyle || ''}`}>
                  {image ? (
                    <span
                      style={{
                        backgroundImage: 'url(' + image + ')'
                      }}
                    />
                  ) : (
                    getInitials(imageText)
                  )}
                </div>
              )}
            </div>
            <div className="flex-column text-container component-container letter-spacing-1x secondary-font line-height-regular flex-1">
              <span
                className={`block span-label line-height-small ${
                  !value ? 'light primary-font' : 'text-uppercase extra-strong small'
                }`}
              >
                {label}
              </span>
              {value && (
                <span className="block truncate span-value text-uppercase line-height-small strong size-extra-small text-secondary text-lighten-2 p-t-s">
                  {value}
                </span>
              )}
            </div>
            <div className="flex-column arrow-container">
              <SvgImport
                icon={ICONS.ARROW_DOWN}
                className="flex-column flex-end icon-selector-btn icon-extra-small m-l-s flex-row fill-secondary"
              />
            </div>
          </div>
        </div>
        <div className={`selector-list border-t border-t-w-2 border-primary bg-white ${this.state.isOpen && 'active'}`}>
          {showSearch && (
            <input
              type="text"
              placeholder={inputPlaceHolder}
              className="search-selector border-l border-b border-r p-l p-r"
              value={this.state.searchValue}
              onChange={e => this.filterItems(e.target.value)}
            />
          )}
          <div className="content-selector-list app-scroll">
            {this.getOptionList().map((item: any, key: number) => (
              <a
                className="selector-list-item block small p-s-all cursor-pointer"
                key={key}
                onClick={() => this.onSelect(item)}
              >
                {type === 'big-value' ? (
                  <span>{item.name}</span>
                ) : (
                  <span>
                    {item.label || item.value}
                    {item.school && item.school.name ? ` - ${item.school.name}` : ''}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
