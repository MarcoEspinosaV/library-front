import * as React from 'react';
import { ICONS } from '../../constants/images';
import { SvgImport } from '../../utils/ImgUtils';

interface IUploaderFilesComponent {
  filesAccepted: string[];
  sendImg: (form: any) => void;
  value: string;
  onChangeInput?: () => void;
  labels: any;
}
export default class UploaderFilesComponent extends React.Component<IUploaderFilesComponent, any> {
  constructor(props: IUploaderFilesComponent) {
    super(props);
    this.state = {
      fileName: this.props.value || '',
      fileValid: true,
      isHover: false
    };
  }
  selectFile = (e: any) => {
    const extension = e.target.value.split('.').pop();
    const validFile = this.props.filesAccepted.filter((item: string) => item.includes(extension));
    const formData = new FormData();
    formData.append('image-profile', e.target.files[0]);
    this.setState({
      fileName: e.target.files[0].name,
      fileValid: validFile && validFile.length > 0
    });
    if (validFile && validFile.length > 0) {
      this.props.sendImg(formData);
    }
  };
  onHover = () => {
    this.setState({
      isHover: true
    });
  };
  onHoverLeave = () => {
    this.setState({
      isHover: false
    });
  };
  defaultState = () => {
    this.setState({
      fileName: null
    });
    this.props.onChangeInput();
  };

  render() {
    const { filesAccepted, value, labels } = this.props;
    return (
      <div
        className={`flex-row uploader-file border-dashed border-secondary
                    m-t border-lighten-3 radius bg-secondary bg-lighten-5 p-s-all relative ${this.state.fileName &&
                      'uploaded'}`}
        onMouseEnter={() => this.onHover()}
        onMouseLeave={() => this.onHoverLeave()}
      >
        <div
          className={`fileName primary-font strong small text-white ${this.state.isHover &&
            this.state.fileName &&
            this.state.fileValid &&
            'active'}`}
        >
          {this.state.fileName}
        </div>
        {value && this.state.fileValid && (
          <div
            className={`image-profile ${this.state.isHover && 'hover'}`}
            style={{ backgroundImage: `url(${value})` }}
          />
        )}
        <div className="img-container cursor-pointer" onClick={this.defaultState}>
          <SvgImport
            icon={ICONS.GARBAGE}
            className={`fill-white icon-garbage ${this.state.isHover &&
              this.state.fileName &&
              this.state.fileValid &&
              'active'}`}
          />
        </div>
        <div
          className={`uploader-image-container m-auto cursor-pointer ${this.state.fileName &&
            this.state.fileValid &&
            'inactive'}`}
        >
          <span
            className={`secondary-font text-secondary small strong ${
              this.state.fileName && this.state.fileValid ? '' : 'text-lighten-1'
            } ${this.state.isHover && ''}`}
          >
            {this.state.fileName
              ? this.state.fileName && this.state.fileValid
                ? this.state.fileName
                : labels.INVALID_ARCHIVE
              : labels.PROFILE_PHOTO}
          </span>
          <div className="m-t m-b flex-middle">
            <SvgImport icon={ICONS.IMG_SELECT} className="icon-upload-img m-auto" />
            <div className="text-uploader m-auto wrap p-all primary-font text-secondary align-center small text-lighten-1">
              {labels.INSTRUCTIONS_UPLOADER}
            </div>
            <div className="text-uppercase secondary-font small strong text-primary letter-spacing-1x align-center">
              {labels.SELECT_ARCHIVE}
            </div>
            <input
              type="file"
              className="uploader-file-input cursor-pointer"
              name="uploaderFile"
              id="uploaderFile"
              accept={filesAccepted.join(',')}
              onChange={e => this.selectFile(e)}
            />
          </div>
        </div>
      </div>
    );
  }
}
