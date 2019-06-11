import * as React from 'react';
import { ICONS } from '../../constants/images';
import { SvgImport } from '../../utils/ImgUtils';

interface IProps {
  filesAccepted: string[];
  sendFile: (form: any, key: string) => void;
  values: string[];
  onChangeInput?: () => void;
  id: string;
  label?: string;
  columnName: string;
  addLabel: string;
  deleteFile: (index: number) => void;
  noDataLabel?: string;
}

interface IState {
  fileName: string;
  fileValid: boolean;
}

export default class UploaderMultipleFilesComponent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      fileName: '',
      fileValid: true
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
      this.props.sendFile(formData, this.props.id);
    }
  };
  render() {
    const { deleteFile, filesAccepted, id, values, label, columnName, addLabel, noDataLabel } = this.props;
    return (
      <div className="uploader-multiple-files container">
        {label && (
          <label htmlFor={id} className="text-secondary secondary-font strong size-default p-t p-b">
            {label}
          </label>
        )}
        <div className="table-uploader-files row">
          <div className="col-s12 p-all bg-secondary bg-lighten-5 width-100">{columnName}</div>
          <div className="col-s12">
            <div className="row">
              {values && values.length !== 0 ? (
                values.map((item, key) => (
                  <div key={key} className="p-t p-b">
                    <div className="col-s9 text-secondary primary-font p-none">{item.slice(60, item.length)}</div>
                    <div className="col-s3 p-none" onClick={() => deleteFile(key)}>
                      <SvgImport icon={ICONS.TRASH} className="icon-small" />
                    </div>
                  </div>
                ))
              ) : (
                <div className="secondary-font text-secondary text-lighten-1 size-4 flex-row flex-center m-t-lg m-b-lg">
                  {noDataLabel}
                </div>
              )}
            </div>
          </div>
          <div className="col-s12 flex-row flex-end p-none m-t-lg m-b-lg relative">
            <span className="btn btn-border secondary-font text-primary">{addLabel}</span>
            <input
              type="file"
              className="input-uploader-file"
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
