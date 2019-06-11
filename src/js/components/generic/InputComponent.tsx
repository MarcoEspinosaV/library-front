import * as React from 'react';
import { ICONS } from '../../constants/images';
import { SvgImport } from '../../utils/ImgUtils';

type IInputTypes = 'EDITABLE' | 'FULL' | 'DEFAULT' | 'SIMPLE';

interface IInputComponentInterface {
  labelUppercase?: boolean;
  label?: string;
  placeholder?: string;
  onKeyPress?: () => void;
  required?: boolean;
  previewMode?: boolean;
  readOnly?: boolean;
  onChange: (id: string, value: string) => void;
  id: string;
  icon?: any;
  inputType?: IInputTypes;
  type?: 'number' | 'email' | 'number' | 'date' | 'password';
  textarea?: boolean;
  value?: string | number;
  error?: string | { id: string; label: string };
  className?: string;
  labelClass?: string;
  style?: 'icon-box';
  noError?: boolean;
  subLabel?: string;
  alignRight?: boolean;
  notTruncate?: boolean;
  minTextAreaLines?: number;
  maxTextAreaLines?: number;
}

interface IInputComponentState {
  inputId: string;
  rows: number;
}

export default class InputComponent extends React.Component<IInputComponentInterface, IInputComponentState> {
  constructor(props: IInputComponentInterface) {
    super(props);
    this.state = {
      rows: this.props.minTextAreaLines,
      inputId: Math.floor(Math.random() * 1000 + 1).toString()
    };
  }
  handleChange = (e: any) => {
    const textareaLineHeight = 15;
    const { minTextAreaLines, maxTextAreaLines, onChange, id } = this.props;
    const previousRows = e.target.rows;
    const currentRows = Math.floor(e.target.scrollHeight / textareaLineHeight);
    if (currentRows === previousRows) {
      e.target.rows = currentRows;
    }
    this.setState({
      rows:
        currentRows < minTextAreaLines
          ? minTextAreaLines
          : currentRows > maxTextAreaLines
          ? maxTextAreaLines
          : currentRows
    });
    onChange(id, e.target.value);
  };
  render() {
    const {
      label,
      textarea,
      placeholder,
      onKeyPress,
      onChange,
      id,
      icon,
      inputType,
      type,
      value,
      error,
      className,
      required,
      readOnly,
      style,
      labelClass,
      subLabel,
      noError,
      alignRight,
      labelUppercase,
      notTruncate,
      minTextAreaLines
    } = this.props;
    const { rows } = this.state;
    const inputProps = {
      autoComplete: 'off',
      className: [
        'size-default',
        error ? 'input-warning' : '',
        readOnly ? 'text-secondary text-lighten-1' : '',
        alignRight ? 'align-right' : ''
      ].join(' '),
      id: this.state.inputId,
      onChange: textarea ? (e: any) => this.handleChange(e) : (e: any) => onChange(id, e.currentTarget.value),
      onKeyPress: () => (onKeyPress ? onKeyPress() : null),
      placeholder: placeholder || '',
      readOnly: readOnly || false,
      type: `${type ? type : 'text'}`,
      value: value || ''
    };
    const inputLabelClass = labelClass
      ? [labelClass, error ? 'label-error' : ''].join(' ')
      : [
          labelUppercase ? 'text-uppercase' : '',
          error ? 'label-error' : '',
          'flex-middle',
          'flex-row',
          'width-100',
          'secondary-font',
          'size-default',
          'text-secondary',
          'text-lighten-1',
          'strong'
        ].join(' ');
    const errorClass = [
      'size-extra-small',
      'block width-100',
      'align-right',
      'secondary-font',
      'text-warning',
      'truncate'
    ].join(' ');
    return (
      <div
        className={`${className} width-100 input-component m-t ${!noError && 'm-b-lg'} ${inputType || ''} ${
          error ? 'input-warning' : ''
        } ${style || ''} ${icon && 'icon-container'} ${textarea && 'textarea'}`}
      >
        {label && (
          <label className={inputLabelClass} htmlFor={this.state.inputId}>
            <span className={`flex-column ${notTruncate ? '' : 'truncate'} p-r flex-1 ${error && 'text-warning'}`}>
              {required ? label + ' *' : label}
            </span>
            <span className={`flex-column error-icon ${error ? 'active-error-icon' : ''}`}>
              <SvgImport className="icon-extra-small fill-warning" icon={ICONS.WARNING} />
            </span>
          </label>
        )}
        {icon && <img src={icon} className="icon-content icon-extra-small" alt="" />}
        {!textarea ? <input {...inputProps} /> : <textarea {...inputProps} rows={rows || minTextAreaLines || 4} />}
        <div className="flex-row flex-no-wrap subLabel-content flex-end">
          {!error && (
            <div className="flex-column size-extra-small text-secondary secondary-font text-lighten-2 align-right">
              {subLabel || ''}
            </div>
          )}
          {error && !noError && <div className={`flex-column active-error ${errorClass}`}>{error}</div>}
        </div>
      </div>
    );
  }
}
