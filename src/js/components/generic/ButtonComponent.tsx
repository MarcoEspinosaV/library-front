import * as React from 'react';

interface IButtonComponentInterface {
  text: string;
  onClick?: () => void;
  id?: string;
  buttonText?: boolean;
  lowerText?: boolean;
  className?: string;
  borderButton?: boolean;
  smallButton?: boolean;
  type?: 'primary' | 'warning' | 'secondary' | 'danger';
  justifyBtn?: boolean;
  disable?: boolean;
  summitButton?: boolean;
  visualDisable?: boolean;
}

export default class ButtonComponent extends React.Component<IButtonComponentInterface> {
  render() {
    const {
      text,
      onClick,
      smallButton,
      buttonText,
      justifyBtn,
      type,
      id,
      disable,
      visualDisable,
      borderButton,
      className,
      summitButton,
      lowerText
    } = this.props;
    const btnBg =
      disable || visualDisable
        ? `${visualDisable ? 'disable-visual-btn' : 'disable-btn'}  bg-secondary bg-lighten-1 text-white`
        : type
        ? 'bg-' + type + ' text-white'
        : 'bg-primary text-white';
    const buttonTextClass = disable
      ? 'disable-btn text-secondary text-lighten-3'
      : type
      ? 'text-' + type + (type === 'secondary' ? 'text-lighten-2' : '')
      : 'text-secondary text-lighten-2';
    const btnBorder = disable
      ? 'disable-btn border-secondary border-lighten-1 text-secondary text-lighten-1 border'
      : type
      ? 'border-' + type + ' border text-' + type + ''
      : 'border-primary border text-primary';
    const btnSize = smallButton ? 'small-btn' : 'default-btn';
    const btnJustify = justifyBtn ? 'justify-btn' : '';
    const buttonProps = {
      className: `btn ${!lowerText ? 'text-uppercase' : 'letter-spacing-0'} ${className || ''} ${
        borderButton ? btnBorder : buttonText ? buttonTextClass : btnBg
      } ${btnSize} ${btnJustify}`,
      id,
      onClick: () => onClick()
    };
    return summitButton ? <button {...buttonProps}>{text}</button> : <a {...buttonProps}>{text}</a>;
  }
}
