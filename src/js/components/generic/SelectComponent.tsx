import * as React from 'react';
import { ICONS } from '../../constants/images';
import { SvgImport } from '../../utils/ImgUtils';

type ISelectTypes = 'EDITABLE' | 'FULL' | 'DATE' | 'DATE_FULL' | 'SIMPLE';

interface ISelect {
  id: string;
  value?: any;
  placeholder?: string;
  label?: string;
  error?: string;
  className?: string;
  selectType?: ISelectTypes;
  noDataText: string;
  options: any[];
  required?: boolean;
  disable?: boolean;
  onChange: (id: string, item: any) => void;
  previewMode?: boolean;
  optionKeyValue?: string;
  language?: string;
}

export class SelectComponent extends React.Component<ISelect, any> {
  private selectRef: any = React.createRef();
  constructor(props: ISelect) {
    super(props);
    this.state = {
      activeOptions: false,
      inputId: Math.floor(Math.random() * 1000 + 1),
      searchText: ''
    };
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
  onChange = (id: string, item: any) => {
    this.props.onChange(id, item);
    this.setState({ activeOptions: false });
  };
  onChangeValue = (e: any) => {
    this.setState({ searchText: e.target.value });
  };
  onBlur = () => {
    setTimeout(() => {
      this.setState({
        activeOptions: false,
        searchText: ''
      });
    }, 150);
  };
  handleClickOutside = (event: any) => {
    if (this.selectRef.current && !this.selectRef.current.contains(event.target)) {
      this.setState({
        activeOptions: false,
        searchText: ''
      });
    }
  };
  onFocus = () => {
    if (!this.props.disable) {
      this.setState({
        activeOptions: true
      });
    }
  };
  list = (text: string) => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  };
  openCloseOptions = () => {
    this.setState({
      activeOptions: !this.state.activeOptions
    });
  };
  render() {
    const inputRef: any = React.createRef();
    const {
      id,
      value,
      placeholder,
      label,
      error,
      className,
      selectType,
      options,
      required,
      noDataText,
      previewMode,
      optionKeyValue,
      language,
      disable
    } = this.props;
    const inputValue = !this.state.activeOptions && value ? value.value || value : this.state.searchText;
    const inputProps = {
      autoComplete: 'off',
      className: error ? 'input-warning p-r-s p-l-s truncate primary-font' : 'p-r-s p-l-s truncate primary-font',
      id: this.state.inputId,
      onChange: this.onChangeValue,
      onFocus: this.onFocus,
      onKeyPress: () => 1,
      placeholder,
      readOnly: previewMode || disable,
      ref: inputRef,
      required,
      value: inputValue
    };
    const errorClass = [
      'size-extra-small',
      'block width-100',
      'align-right',
      'secondary-font',
      'text-warning',
      'error-content',
      'truncate'
    ].join(' ');
    const classOptions = ['bg-white', 'options-select', 'flex-column', 'app-scroll'].join(' ');
    const inputLabelClass = [
      error ? 'label-error' : '',
      'flex-middle',
      'flex-row',
      'width-100',
      'secondary-font',
      'small',
      'text-secondary',
      'text-lighten-1',
      'strong'
    ].join(' ');
    const selectClassImg = ['select-icon'].join(' ');
    const optionsList = this.state.searchText
      ? language && optionKeyValue
        ? options.filter(item =>
            this.list(item[`${optionKeyValue}_${language}`] || item[`${optionKeyValue}`]).includes(
              this.list(this.state.searchText)
            )
          )
        : options.filter(item =>
            this.list(item[`name_${language}`] || item.name || item[`value_${language}`] || item.value).includes(
              this.list(this.state.searchText)
            )
          )
      : options;

    return (
      <div
        className={`width-100 select-component ${selectType === 'DATE_FULL' ? 'm-t-s' : 'm-t m-b-lg'} ${selectType ||
          ''} ${className} ${error ? 'input-warning' : ''} ${disable && 'disable-content'}`}
        ref={this.selectRef}
      >
        {label && (
          <label className={inputLabelClass} htmlFor={this.state.inputId}>
            <span className="flex-row truncate p-r flex-1">
              {label && label}
              <span className={error ? 'text-warning' : 'text-success'}>{required && ' *'}</span>
            </span>
            <span className={`flex-column error-icon ${error ? 'active-error-icon' : ''}`}>
              <SvgImport className="icon-extra-small fill-warning" icon={ICONS.WARNING} />
            </span>
          </label>
        )}
        <div className="input-container relative">
          <input {...inputProps} />
          <div onClick={this.openCloseOptions}>
            {!previewMode && (
              <SvgImport
                icon={ICONS.ARROW_DOWN}
                className={`${selectClassImg} select-icon ${
                  this.state.activeOptions ? 'fill-primary' : error ? 'fill-warning' : 'fill-secondary'
                }`}
              />
            )}
          </div>
        </div>
        {selectType !== 'DATE' && selectType !== 'DATE_FULL' && (
          <div className={`${error ? 'active-error' : ''} ${errorClass}`}>{error && error}</div>
        )}
        <div className={`${classOptions} ${this.state.activeOptions && 'active'}`}>
          {!optionsList.length && (
            <div className="select-item p-t-s p-b-s p-l p-r">
              <span className="truncate text-secondary size-medium text-lighten-4">{noDataText}</span>
            </div>
          )}
          {optionsList &&
            optionsList.map((item, key) => (
              <a key={key} className="select-item p-t-s p-b-s" onClick={() => this.onChange(id, item)}>
                <span className="p-l-s p-r-s text-secondary text-lighten-1 width-100 truncate size-medium">
                  {(item.value && item.value) || item[`name_${language}`] || item.name}
                </span>
              </a>
            ))}
        </div>
      </div>
    );
  }
}
