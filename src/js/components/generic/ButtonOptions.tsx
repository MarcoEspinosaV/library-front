import * as React from 'react';

interface IButtonOptions {
  icon?: string;
  data: any;
  label: string;
  language: string;
  onClick: (item: any) => void;
  position: string;
  smallButton?: boolean;
  extraClass?: string;
}

class ButtonOptions extends React.Component<IButtonOptions, any> {
  private ButtonOptionsContainer: any = React.createRef();
  constructor(props: IButtonOptions) {
    super(props);
    this.state = {
      openStructureOptions: false
    };
  }

  toggleStructureNav = () => {
    this.setState({
      openStructureOptions: !this.state.openStructureOptions
    });
  };

  handleOutsideClick = (event: any) => {
    if (!this.ButtonOptionsContainer.current.contains(event.target)) {
      this.setState({ openStructureOptions: false });
    }
  };

  componentWillMount() {
    document.addEventListener('click', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  }

  render() {
    const { data, label, onClick, language, icon, position, smallButton, extraClass } = this.props;
    return (
      <a
        className={`btn-options btn-squire color-white-bg ${extraClass || ''} ${smallButton && 'btn-small'} `}
        ref={this.ButtonOptionsContainer}
        onClick={() => this.toggleStructureNav()}
      >
        <span className="label truncate">{label}</span>
        <i className={`fa ${icon || 'fa-plus'}`} />
        <ul className={`options ${position} ${this.state.openStructureOptions && 'active'}`}>
          {Object.keys(data).map((type, key) => (
            <li className="item-option" key={key} onClick={() => onClick(data[type])}>
              {data[type]['name_' + language]}
            </li>
          ))}
        </ul>
      </a>
    );
  }
}

export default ButtonOptions;
