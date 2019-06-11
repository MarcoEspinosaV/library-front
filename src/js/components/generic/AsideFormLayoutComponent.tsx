import * as React from 'react';
import { ICONS } from '../../constants/images';
import { SvgImport } from '../../utils/ImgUtils';
import ButtonComponent from './ButtonComponent';

export interface ITabs {
  [name: string]: {
    action?: string;
    id: string;
    label: string;
    onClick?: (data: any) => void;
  };
}

interface IAsideLayoutFormComponent {
  children: any;
  tabs?: ITabs;
  activeTabId?: string;
  successAction?: () => void;
  successActionText: string;
  cancelAction?: () => void;
  cancelActionText: string;
  title?: string;
  deleteAction?: () => void;
  deleteActionText?: string;
}

export const AsideFormLayoutComponent = (props: IAsideLayoutFormComponent) => {
  const {
    children,
    title,
    tabs,
    cancelAction,
    cancelActionText,
    successAction,
    successActionText,
    activeTabId,
    deleteAction,
    deleteActionText
  } = props;
  return (
    <div className="aside-form-layout-component flex-column height-100">
      {tabs && (
        <div className="flex-row p-l p-r m-b">
          <ul className="border-b width-100 p-b border-secondary border-lighten-5 list-inline">
            {Object.keys(tabs).map(tabKey => {
              const itemClass = [
                'small',
                'm-r',
                activeTabId !== tabKey ? 'text-secondary text-lighten-2' : 'link link-primary',
                'text-uppercase',
                'strong',
                'letter-spacing-1x'
              ].join(' ');
              return (
                <li key={tabKey}>
                  <a
                    onClick={() => (activeTabId !== tabKey ? tabs[tabKey].onClick(tabs[tabKey]) : null)}
                    className={itemClass}
                  >
                    {tabs[tabKey].label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {title && (
        <h3 className="size-h3 regular p-t-none p-l p-r text-secondary flex-middle flex-row">
          <span className="flex-column flex-1 p-r truncate">{title}</span>
        </h3>
      )}
      <div className="flex-row flex-1">
        <div className="content-area block width-100 height-100 p-l p-r">{children}</div>
      </div>
      {(cancelAction || successAction || deleteAction) && (
        <div className="flex-row bg-white border-t border-secondary border-lighten-4 p-t-s p-b-s">
          {deleteAction && (
            <ButtonComponent
              buttonText={true}
              type="warning"
              onClick={() => deleteAction()}
              text={deleteActionText || '-'}
              smallButton={true}
            />
          )}
          <div className="flex-1 flex-row flex-end">
            {cancelAction && (
              <ButtonComponent
                buttonText={true}
                className="m-r-s"
                onClick={() => cancelAction()}
                text={cancelActionText || '-'}
                smallButton={true}
              />
            )}
            <ButtonComponent
              className="m-r-s"
              onClick={() => successAction()}
              text={successActionText || '-'}
              smallButton={true}
              disable={!successAction}
            />
          </div>
        </div>
      )}
    </div>
  );
};
