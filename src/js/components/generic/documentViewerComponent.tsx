import * as React from 'react';

interface IProps {
  height: string;
  id: string;
  label?: string;
  documentText: string;
}

export default class DocumentViewerComponent extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const { height, id, label, documentText } = this.props;
    return (
      <div className="document-viewer-component">
        {label && (
          <label htmlFor={id} className="m-t m-b secondary-font text-secondary strong size-4">
            {label}
          </label>
        )}
        <div id={id} className="main-layout-scroll scroll-area scroll-blue m-t p-r-s" style={{ height }}>
          {documentText}
        </div>
      </div>
    );
  }
}
