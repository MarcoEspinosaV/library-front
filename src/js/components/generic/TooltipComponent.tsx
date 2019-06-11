import * as React from 'react';

type IPosition = 'bottom' | 'left' | 'right' | 'top' | 'bottomLeft' | 'topLeft';

interface ITooltipComponent {
  children: any;
  content: any;
  maxWidth?: string;
  containerStyles?: any;
  position?: IPosition;
}

export default class TooltipComponent extends React.Component<ITooltipComponent, any> {
  private tooltip: any = React.createRef();
  constructor(props: ITooltipComponent) {
    super(props);
    this.state = { height: null };
  }
  calHeight = (e: any) => {
    const height = e.target.offsetHeight;
    this.setState({ height });
  };
  getTooltipStyles = (): any => {
    const { maxWidth, position } = this.props;
    const tooltipContent = this.tooltip.current;
    const tooltipItemWidth = tooltipContent ? tooltipContent.offsetWidth : `${maxWidth ? maxWidth : '200px'}`;
    const tooltipItemHeight = tooltipContent ? tooltipContent.clientHeight : this.state.height;
    const tooltipPosition = position ? position : 'bottom';
    switch (tooltipPosition) {
      case 'bottom':
      case 'top':
        return {
          marginLeft: -tooltipItemWidth / 2 + 'px'
        };
      case 'left':
      case 'right':
        return {
          marginTop: -tooltipItemHeight / 2 + 'px'
        };
      default:
        return {};
    }
  };
  render() {
    const { content, children, position, containerStyles } = this.props;
    const tootipPosition = position ? position : 'bottom';
    return (
      <div className="tooltip-component" onMouseEnter={(e: any) => this.calHeight(e)} style={containerStyles || {}}>
        {children}
        <div
          ref={this.tooltip}
          className={`tooltip text-white bg-secondary small ${tootipPosition}-position`}
          style={this.getTooltipStyles()}
        >
          {content}
        </div>
      </div>
    );
  }
}
