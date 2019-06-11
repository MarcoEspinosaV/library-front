import * as React from 'react';

import { GLOBAL_IMAGES } from '../../constants/images';
import { SvgImport } from '../../utils/ImgUtils';

export const EmailLayoutComponent = () => {
  const mainStyle = {
    height: 'auto',
    margin: 'auto',
    marginTop: '30px',
    maxWidth: '640px',
    width: '100%'
  };
  const iconStyle = {
    height: '55px',
    margin: 'auto',
    width: '120px'
  };
  const titleStyle = {
    color: '#333337',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '16px',
    fontWeight: 500,
    letterSpacing: '2px',
    marginBottom: '30px',
    marginTop: '15px',
    width: '100%;'
  };
  const messageStyle = {
    color: '#647177',
    fontFamily: 'Muli, sans-serif',
    fontSize: '16px',
    lineHeight: 1.5,
    width: '100%'
  };
  const contentButtonStyle = {
    marginBottom: '30px',
    marginTop: '30px',
    width: '100%'
  };
  const buttonStyle = {
    background: '#4382ff',
    borderRadius: '4px',
    color: 'white',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 500,
    letterSpacing: '2px',
    marginLeft: '30%',
    padding: '15px 55px'
  };
  const footerMessageStyle = {
    color: '#647177',
    fontFamily: 'Muli, sans-serif',
    fontSize: '16px',
    lineHeight: 1.5,
    marginBottom: '15px',
    width: '100%'
  };
  return (
    <div style={mainStyle}>
      <div style={iconStyle}>
        <img src="http://74.207.235.144/imgTest/brand.svg" alt="" />
      </div>
      <div style={titleStyle}> BIENVENIDO A IDUKAY</div>
      <div style={messageStyle}>
        Hola name, recibiste una invitación de schoolName para iniciar el registro de estudiantes.
      </div>
      <div style={contentButtonStyle}>
        <a href="invitationUrl" style={buttonStyle}>
          INICIAR REGISTRO
        </a>
      </div>
      <div style={footerMessageStyle}> Si tienes preguntas contáctanos a ayuda@idukay.com</div>
      <div style={footerMessageStyle}> Saludos,</div>
      <div style={footerMessageStyle}> Janine Leal</div>
      <div style={footerMessageStyle}> Soporte Idukay</div>
    </div>
  );
};
