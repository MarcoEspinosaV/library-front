import * as React from 'react';
import { ICONS } from '../../constants/images';
import { SvgImport } from '../../utils/ImgUtils';

type IMultiLevelStyle = 'FULL';

interface IOptions {
  id: string;
  name?: string;
  name_en_US?: string;
  name_es_EC?: string;
  topLabel?: string;
  topLabel_en_US?: string;
  topLabel_es_EC?: string;
  children?: IChildrenOptions[];
}

interface IChildrenOptions {
  id: string;
  name?: string;
  name_en_US?: string;
  name_es_EC?: string;
}

interface IProps {
  language?: string;
  options: IOptions[];
  values?: string[] | string;
  disable?: boolean;
  singleValue?: string;
  placeholder?: string;
  onChangeValue: (value?: any, key?: string) => void;
  id: string;
  label?: string;
  isMultiSelect?: boolean;
  selectAllLabel?: string;
  style?: IMultiLevelStyle;
  error?: string;
}

interface IState {
  isOpen: boolean;
  hasFocus: boolean;
}

export default class MultiLevelOptionsSelectComponent extends React.Component<IProps, IState> {
  private selectRef = React.createRef<any>();
  constructor(props: IProps) {
    super(props);
    this.state = {
      hasFocus: false,
      isOpen: false
    };
  }
  componentDidUpdate() {
    document.addEventListener('mousedown', this.handleDocumentClick);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleDocumentClick);
  }
  handleDocumentClick = (event: Event) => {
    if (this.selectRef && !this.selectRef.current.contains(event.target)) {
      this.setState({ isOpen: false });
    }
  };
  handleClickInput = () => {
    this.setState({ isOpen: true });
  };
  handleOnClick = () => {
    const { isOpen, hasFocus } = this.state;
    this.setState({ isOpen: !isOpen, hasFocus: !hasFocus });
  };
  isSelected = (id?: string) => {
    const { options, values } = this.props;
    const allChildren = [];
    let isSelected = false;
    options.map(option => {
      const array = [];
      option.children.map(child => {
        allChildren.push(child.id);
        if (id === option.id && values.includes(child.id)) {
          array.push(child.id);
        }
      });
      if (option.id === id) {
        isSelected = array.length === option.children.length;
      }
    });
    return {
      allSelected: allChildren.length === values.length,
      childrenSelected: isSelected
    };
  };
  getValues = () => {
    const { options, language, values } = this.props;
    const arrayValue: any = [];
    options.map((currentValue: any) => {
      const childrenArray: any = [];
      const name = currentValue.name || currentValue[`name_${language}`];
      currentValue.children.map((child: any) => {
        const childName = child.name || child[`name_${child}`];
        if (values.includes(child.id)) {
          childrenArray.push(childName);
        }
      });
      if (childrenArray.length) {
        arrayValue.push(name + ' · ' + childrenArray.join(' · '));
      }
    });
    return arrayValue;
  };
  selectValue = (idItem: any, isSelectAll?: boolean) => {
    const { onChangeValue, id, values } = this.props;
    let newValues = [...values];
    if (!Array.isArray(idItem)) {
      if (newValues.indexOf(idItem) > -1) {
        newValues.splice(values.indexOf(idItem), 1);
      } else {
        newValues.push(idItem);
      }
    } else if (Array.isArray(idItem) && !isSelectAll) {
      const array = [];
      idItem.map(item => {
        const index = newValues.findIndex(val => val === item);
        if (index > -1) {
          array.push(index);
          newValues.splice(index, 1);
        }
      });
      if (array.length < idItem.length) {
        newValues = newValues.concat(idItem);
      }
    } else if (Array.isArray(idItem) && isSelectAll) {
      if (this.isSelected().allSelected) {
        newValues = [];
      } else {
        newValues = [];
        idItem.map(item => {
          newValues = newValues.concat(item);
        });
      }
    }
    onChangeValue(newValues, id);
  };
  onSelectSingleValue = (value: any, id: string) => {
    this.props.onChangeValue(value, id);
    this.setState({
      isOpen: false
    });
  };
  render() {
    const {
      style,
      language,
      label,
      options,
      id,
      isMultiSelect,
      placeholder,
      selectAllLabel,
      error,
      values,
      disable,
      onChangeValue
    } = this.props;
    const { isOpen } = this.state;
    const multiLevelStyle = [
      'multi-level-options-select',
      'relative',
      'm-t',
      'm-b',
      style ? style : '',
      error ? 'error' : ''
    ].join(' ');
    const labelClass = [
      'text-secondary',
      'text-lighten-1',
      'secondary-font',
      'text-uppercase',
      'size-small',
      'letter-spacing-1x',
      'truncate'
    ].join(' ');
    const parentItemClass = [
      isMultiSelect ? 'cursor-pointer' : 'text-lighten-1',
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
      'p-b-s',
      'item-hover'
    ].join(' ');
    const childrenItemClass = [
      'sub-item-list',
      'flex-row',
      'flex-nowrap',
      'm-l',
      'm-r',
      'p-t-s',
      'p-b-s',
      'cursor-pointer'
    ].join(' ');
    return (
      <div className={`${multiLevelStyle} ${disable && 'disable-content'}`} tabIndex={0} ref={this.selectRef}>
        {label && (
          <label className={labelClass} htmlFor={id}>
            {label}
          </label>
        )}
        {error && <SvgImport icon={ICONS.WARNING} className="icon-error-selector icon-extra-small fill-warning" />}
        <div id={id} className="input-content relative width-100">
          <input
            readOnly={disable}
            type="text"
            className="input-select width-100 text-secondary primary-font truncate p-t-lg"
            onClick={() => !disable && this.handleClickInput()}
            placeholder={placeholder}
            defaultValue={this.getValues().join(' · ')}
          />
          <span onClick={() => !disable && this.handleOnClick}>
            <SvgImport icon={ICONS.ARROW_DOWN} className="icon-arrow-down fill-secondary" />
          </span>
        </div>
        <div className={`options-list width-100 p-t p-b-s scroll-area scroll-blue ${isOpen ? 'active' : ''}`}>
          {selectAllLabel && isMultiSelect && (
            <div
              className="flex-row flex-no-wrap p-l m-b cursor-pointer"
              onClick={() => this.selectValue(options.map(item => item.children.map(child => child.id)), true)}
            >
              <img
                src={this.isSelected().allSelected ? ICONS.SELECT : ICONS.NO_SELECT}
                className="icon-extra-extra-small m-r-s"
              />
              <div className="primary-font text-secondary">{selectAllLabel}</div>
            </div>
          )}
          {options.map((option: any, key) => (
            <div key={key}>
              {(option.topLabel || option[`topLabel_${language}`]) && (
                <div className="small secondary-font text-secondary text-uppercase text-lighten-1 letter-spacing-1x strong p-l">
                  {option.topLabel || option[`topLabel_${language}`]}
                </div>
              )}
              <div className={`${isMultiSelect ? 'multi-select' : ''} parent-item-list`} tabIndex={-1}>
                <div
                  className={parentItemClass}
                  onClick={
                    isMultiSelect
                      ? () => this.selectValue(option.children.map((item: any) => item.id), false)
                      : () => null
                  }
                >
                  {isMultiSelect && (
                    <img
                      src={this.isSelected(option.id).childrenSelected ? ICONS.SELECT : ICONS.NO_SELECT}
                      className="icon-extra-small"
                    />
                  )}
                  <div className={`${isMultiSelect && 'p-l-s'} width-100`}>
                    {option.name || option[`name_${language}`]}
                  </div>
                </div>
                {option.children.map((children: any, index: number) => (
                  <div key={index} className="children-item-list">
                    <div
                      className={`${childrenItemClass} border-secondary border-b border-lighten-3 item-hover`}
                      onClick={
                        isMultiSelect
                          ? () => this.selectValue(children.id)
                          : () => this.onSelectSingleValue(children.id, id)
                      }
                    >
                      {isMultiSelect && (
                        <img
                          src={values.includes(children.id) ? ICONS.SELECT : ICONS.NO_SELECT}
                          className="p-l-lg icon-extra-small"
                        />
                      )}
                      <span className={`${values.includes(children.id) && 'strong'} p-l`}>
                        {children.name || children[`name_${language}`]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
