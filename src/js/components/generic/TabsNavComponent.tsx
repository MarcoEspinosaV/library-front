import * as React from 'react';

import { ICONS } from '../../constants/images';
import { CHANGE_TAB_NAME, INavOptions } from '../../constants/navsOptions';
import { SvgImport } from '../../utils/ImgUtils';
import { hashCode } from '../../utils/ObjectUtils';

type ITabNavType = 'SIMPLE' | 'NO_BACKGROUND' | 'SIMPLE_NO_BORDER';

interface ITabsNavComponent {
  activeTab: number;
  language: string;
  editable?: boolean;
  addLabel?: string;
  namePlaceholder?: string;
  addTabAction?: () => void;
  onChangeValue?: (index: number, value: string) => void;
  deleteTab?: (index: number) => void;
  onSelectTab?: (index: number) => void;
  tabs: Array<{ name: string; noEdit?: boolean }>;
  editOptions?: INavOptions[];
  label?: string;
  tabNavType?: ITabNavType;
  tabErrors?: { [names: string]: string };
  changeColumnWidth?: (width: number[]) => void;
}

interface ITabNavComponentState {
  activeSubNav: number;
  componentId: string;
  focusTab: number;
  left: number;
  columnsWidth: number[];
}

export default class TabsNavComponent extends React.Component<ITabsNavComponent, ITabNavComponentState> {
  private optionsRef: any = React.createRef();
  constructor(props: ITabsNavComponent) {
    super(props);
    this.state = {
      activeSubNav: null,
      componentId: Math.random()
        .toString(36)
        .substring(7),
      focusTab: null,
      left: 0,
      columnsWidth: []
    };
  }
  changeColumnWidth = (): void => {
    setTimeout(() => {
      if (this.props.changeColumnWidth && this.optionsRef && this.optionsRef.current) {
        const contentList = [...this.optionsRef.current.children];
        const widthItems = contentList.map((item: any, key: number) => {
          return item.clientWidth;
        });
        if (hashCode(this.state.columnsWidth) !== hashCode(widthItems)) {
          this.setState({
            columnsWidth: widthItems
          });
          this.props.changeColumnWidth(widthItems);
        }
      }
    }, 200);
  };
  focusTab = (index: number) => {
    const focusInput = document.getElementById(this.state.componentId + index);
    if (focusInput) {
      this.props.onSelectTab(index);
      this.setState(
        {
          focusTab: index
        },
        () => {
          focusInput.focus();
        }
      );
    }
  };
  addLabel = () => {
    this.props.addTabAction();
    const tabsCount = this.props.tabs.length;
    const focusTab = this.focusTab;
    setTimeout(() => {
      focusTab(tabsCount);
    }, 200);
  };
  removeFocus = () => {
    this.setState({
      focusTab: null
    });
  };
  toggleOptions = (index: number) => {
    if (index === this.state.activeSubNav) {
      this.setState({
        activeSubNav: null
      });
    } else {
      this.setState({
        activeSubNav: index
      });
    }
  };
  handleClickOutside = (event: any) => {
    if (this.optionsRef.current && !this.optionsRef.current.contains(event.target) && this.state.activeSubNav) {
      this.setState({
        activeSubNav: null
      });
    }
  };
  removeTab = (index: number) => {
    this.props.deleteTab(index);
  };
  handleOptionClick = (index: number, option: INavOptions) => {
    if (option.id === CHANGE_TAB_NAME) {
      this.focusTab(index);
    }
    if (option.id === 'DELETE') {
      this.removeTab(index);
    }
  };
  handleInputChange = (index: number, e: any) => {
    this.props.onChangeValue(index, e.target.value);
  };
  handleSelectTab = (index: number) => {
    this.props.onSelectTab(index);
    this.setState({
      activeSubNav: null
    });
  };
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    this.focusTab(this.props.activeTab);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
  render() {
    const {
      tabs,
      activeTab,
      editable,
      language,
      editOptions,
      namePlaceholder,
      addLabel,
      label,
      tabNavType,
      tabErrors
    } = this.props;
    this.changeColumnWidth();
    return (
      <div className={`tabs-nav-component width-100 border-b border-secondary border-lighten-3 ${tabNavType}`}>
        <div className="flex-row flex-no-wrap">
          <div className="flex-column">
            <div className="tabs-list-container flex-no-wrap flex-row" ref={this.optionsRef}>
              {label && (
                <div className="label-item flex-middle flex-row small text-uppercase p-l strong letter-spacing-1x">
                  {label}
                </div>
              )}
              {tabs.map((tab: any, key) => {
                const sectionErrors = tabErrors
                  ? Object.keys(tabErrors).filter(item => item.includes(`data.${key}`))
                  : [];
                const tabError = tabErrors ? tabErrors[`data.${key}.name`] : null;
                return (
                  <a
                    key={key}
                    className={`tab-item flex-middle flex-row ${activeTab === key && 'active-tab'} ${this.state
                      .focusTab === key && 'focus-tab'} ${this.state.activeSubNav === key && 'active-subnav'} ${
                      tabError ? 'error-tab' : ''
                    }`}
                  >
                    {activeTab !== key && sectionErrors.length ? (
                      <span className="error-icon">
                        <SvgImport className="icon-extra-small fill-warning" icon={ICONS.WARNING} />
                      </span>
                    ) : null}
                    {tabError && <span className="error-text truncate">{tabError}</span>}
                    <span
                      onClick={() => this.handleSelectTab(key)}
                      className="input-reference flex-1 flex-center flex-column"
                    >
                      {tab[`name_${language}`] || tab.name || namePlaceholder}
                      {editable && editOptions && (
                        <input
                          id={this.state.componentId + key}
                          placeholder={namePlaceholder}
                          className="input-tab-nav"
                          onBlur={() => this.removeFocus()}
                          value={tab.name || ''}
                          onChange={(e: any) => this.handleInputChange(key, e)}
                        />
                      )}
                    </span>
                    {editable && editOptions && (
                      <span
                        className={`edit-options ${activeTab !== key && sectionErrors.length && 'opacity-0'}`}
                        onClick={() => this.toggleOptions(key)}
                      >
                        <SvgImport icon={ICONS.ARROW_DOWN} className="icon-extra-small left m-r fill-secondary" />
                        <ul className={`option-list`}>
                          {editOptions.map((option, optionKey) => {
                            if (!tab.noEdit || (tab.noEdit && option.id !== 'DELETE')) {
                              return (
                                <li
                                  className={`${option.customClass || ''}`}
                                  key={optionKey}
                                  onClick={() => this.handleOptionClick(key, option)}
                                >
                                  {option['name_' + language]}
                                </li>
                              );
                            }
                          })}
                        </ul>
                      </span>
                    )}
                  </a>
                );
              })}
            </div>
          </div>
          {editable && editOptions && (
            <div className="flex-column flex-center">
              <a className="text-primary small p-l-lg p-r-lg strong" onClick={() => this.addLabel()}>
                + {addLabel}
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }
}
