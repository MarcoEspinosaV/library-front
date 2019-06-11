import * as React from 'react';
import TooltipComponent from './TooltipComponent';

type IStyle = 'small';

interface IProgressComponentInterface {
  countA: number;
  countB?: number;
  total: number;
  labelA?: string;
  labelB?: string;
  style?: IStyle;
}

export default class ProgressComponent extends React.Component<IProgressComponentInterface> {
  render() {
    const { countA, countB, total, labelA, labelB, style } = this.props;
    const percentA = countA ? (countA * 100) / total : 0;
    const percentB = countB ? (countB * 100) / total : 0;
    const progressComponentStyle = [style || '', 'progress-component', 'width-100', 'block'].join(' ');
    return (
      <div className={progressComponentStyle}>
        <div className="bar-bg width-100 bg-secondary bg-lighten-4 no-wrap">
          {percentA ? (
            <TooltipComponent content={labelA} containerStyles={{ width: `${percentA}%` }}>
              <div className="percent inline-block bg-danger width-100" />
            </TooltipComponent>
          ) : null}
          {percentB ? (
            <TooltipComponent content={labelB} containerStyles={{ width: `${percentB}%` }}>
              <div className="percent inline-block bg-info width-100" />
            </TooltipComponent>
          ) : null}
        </div>
      </div>
    );
  }
}
