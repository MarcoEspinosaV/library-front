import * as React from 'react';

interface IImageSvgInterface {
  icon: string;
  style?: object;
  className?: string;
}

export class SvgImport extends React.Component<IImageSvgInterface, any> {
  icon: any;
  constructor(props: IImageSvgInterface) {
    super(props);
    this.icon = React.createRef();
  }

  loadImage = () => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', this.props.icon);
      xhr.overrideMimeType('image/svg+xml');
      xhr.send('');
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.responseXML.documentElement);
        } else {
          reject({
            status: xhr.status,
            statusText: xhr.statusText
          });
        }
      };
      xhr.onerror = () => {
        reject({
          status: xhr.status,
          statusText: xhr.statusText
        });
      };
    });
  };

  getIcon = async () => {
    const icon = await this.loadImage();
    if (this.icon.current) {
      this.icon.current.append(icon);
    }
  };
  componentDidMount() {
    this.getIcon();
  }
  render() {
    return <div ref={this.icon} style={this.props.style || {}} className={`svg-icon ${this.props.className || ''}`} />;
  }
}
