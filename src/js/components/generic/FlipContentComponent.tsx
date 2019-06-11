import * as React from 'react';

interface IFlipContentComponentInterface {
  visibleBackContent: boolean;
  frontContent: any;
  backContent: any;
  type: 'flip' | 'intro';
}

export default class FlipContentComponent extends React.Component<IFlipContentComponentInterface> {
  render() {
    const { backContent, frontContent, visibleBackContent, type } = this.props;
    return (
      <div className={`width-100 flip-component ${type} ${visibleBackContent && 'active'}`}>
        <div className="flip-content">
          <div className="content-front">{frontContent}</div>
          <div className="content-back">{backContent}</div>
        </div>
      </div>
    );
  }
}
