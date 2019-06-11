import * as React from 'react';

interface IAsideLayoutFormComponent {
  children: any;
  fullHeight?: boolean;
  successAction?: () => void;
  successActionText?: string;
  cancelAction?: () => void;
  cancelActionText?: string;
  title?: string | object;
  customSuccessButtonClass?: string;
}

export const ModalLayoutComponent = (props: IAsideLayoutFormComponent) => {
  const {
    children,
    title,
    cancelAction,
    customSuccessButtonClass,
    fullHeight,
    cancelActionText,
    successAction,
    successActionText
  } = props;
  const maxHeight: any = window.innerHeight;
  return (
    <div className="modal-layout-component width-100 flex-column height-100">
      {title && (
        <div className="flex-row">
          <h1 className="light m-t-none p-l p-r text-secondary">{title}</h1>
        </div>
      )}
      <div className="flex-row flex-1">
        <div
          className="content-area block width-100 height-100 p-l p-r"
          style={{ maxHeight: maxHeight - 285 + 'px', height: fullHeight ? maxHeight - 285 + 'px' : '100%' }}
        >
          {children}
        </div>
      </div>
      {(cancelAction || successAction) && (
        <div className="flex-row flex-end border-t border-secondary border-lighten-4 p-t p-b">
          {cancelAction && (
            <a onClick={() => cancelAction()} className="btn small-btn size-medium text-secondary text-lighten-2 m-r">
              {cancelActionText || 'Cancelar'}
            </a>
          )}
          {successAction && (
            <a
              onClick={() => successAction()}
              className={`${customSuccessButtonClass || 'text-primary'} strong btn m-r size-medium small-btn`}
            >
              {successActionText || 'Guardar'}
            </a>
          )}
        </div>
      )}
    </div>
  );
};
