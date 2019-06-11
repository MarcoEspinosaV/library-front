import * as React from 'react';
import { GENDERS } from '../../constants/appEnums';
import { ICONS } from '../../constants/images';

interface IOptions {
  value?: string;
  name_es_EC?: string;
  name_en_EN?: string;
  name?: string;
  icon?: string;
  gender?: string;
  id?: string;
  iconSmall?: boolean;
  section: string;
  onClick: any;
}

interface IProps {
  options: IOptions[];
  labelSectionA: string;
  labelSectionB?: string;
  onClickOption: (data?: string) => void;
  mainIcon?: string;
  name?: string;
  language?: string;
  value: string;
  noSectionDataLabel?: string;
}

interface IState {
  isOpen: boolean;
}

export default class SelectorWithSectionsComponent extends React.Component<IProps, IState> {
  private optionContainer: any = React.createRef();
  constructor(props: IProps) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  handlerOnClick = (e: any) => {
    if (this.optionContainer.current && !this.optionContainer.current.contains(e.target)) {
      this.setState({
        isOpen: false
      });
    }
  };

  componentDidMount() {
    document.addEventListener('click', this.handlerOnClick);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handlerOnClick);
  }
  onClickOption = (action: any) => {
    this.setState({ isOpen: false });
    if (action) {
      action();
    }
  };

  getSections = (section: string) => {
    const { options, language, value } = this.props;
    return options
      .filter(item => item.section === section)
      .map((item: any, key: number) => (
        <div
          className="p-all p-t-s p-b-s flex-row flex-middle cursor-pointer"
          key={key}
          onClick={() => this.onClickOption(item.onClick)}
        >
          {item.icon && (
            <div>
              <img src={item.icon} className={`${item.iconSmall ? 'icon-small' : 'custom-icon-size'} ${item.gender}`} />
            </div>
          )}
          <div
            className={`text-secondary primary-font ${item.icon && 'm-l'} ${item.id && value === item.id && 'strong'}`}
          >
            {(language && item[`name${language}`]) || item.name || item.value}
          </div>
        </div>
      ));
  };
  toggleOption = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    const { labelSectionA, labelSectionB, name, mainIcon, noSectionDataLabel } = this.props;
    return (
      <div className="selector-with-sections relative" ref={this.optionContainer}>
        <div className="flex-row flex-middle cursor-pointer" onClick={this.toggleOption}>
          <div className="container-main-image">{mainIcon && <img src={mainIcon} className="main-image" />}</div>
          {name && <div className="m-l">{name}</div>}
          <div>
            <img src={ICONS.ARROW_DOWN} className="icon-extra-small m-l p-t-s" />
          </div>
        </div>
        {this.state.isOpen && (
          <div className="options-selector-list shadow-1">
            <div
              className="p-t-s p-b-s p-l p-r truncate bg-secondary bg-lighten-5 secondary-font text-secondary
                        text-lighten-1 text-uppercase size-small strong letter-spacing-1x"
            >
              {labelSectionA}
            </div>
            {!this.getSections('A').length ? (
              <div className="p-all text-secondary text-lighten-3">{noSectionDataLabel}</div>
            ) : (
              this.getSections('A')
            )}
            {labelSectionB && (
              <div>
                <div
                  className="p-t-s p-b-s p-l p-r truncate bg-secondary bg-lighten-5 secondary-font text-secondary
                            text-lighten-1 text-uppercase size-small strong letter-spacing-1x"
                >
                  {labelSectionB}
                </div>
                {this.getSections('B')}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
