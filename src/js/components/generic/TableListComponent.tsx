import * as React from 'react';
import { ICONS } from '../../constants/images';
import { SvgImport } from '../../utils/ImgUtils';
import { getQueryParams, removeUrlParams, updateUrlParams } from '../../utils/UrlUtils';

export type ITableStyle = 'SIMPLE';

export interface ITableData {
  [key: string]: any;
  type?: 'string' | 'boolean' | 'image' | 'list';
  status?: 'ACTIVE' | 'INACTIVE' | any;
  onClick?: any;
  switchAction?: any;
}

export interface ITableStructure {
  [name: string]: {
    key: string;
    name: string;
    percentWidth?: number;
  };
}

interface ITableListComponent {
  asideIsOpen?: boolean;
  activeId?: string;
  tableColumns: ITableStructure;
  tableData: ITableData[];
  orderByKeys?: string[];
  noDataText: string;
  rowClass?: string;
  headerClass?: string;
  changeOrder?: (params: string) => void;
  style?: ITableStyle;
}

export const TableListComponent = (props: ITableListComponent) => {
  const {
    activeId,
    tableColumns,
    tableData,
    changeOrder,
    noDataText,
    rowClass,
    headerClass,
    asideIsOpen,
    orderByKeys,
    style
  } = props;
  const queryParams = getQueryParams();
  const getNewOrder = (key: string) => {
    const orderValue = queryParams.sort && queryParams.sort === 'DESC' ? 'ASC' : 'DESC';
    let newParamsColumns = updateUrlParams('column', key);
    newParamsColumns = updateUrlParams('sort', orderValue, newParamsColumns);
    return removeUrlParams('page', newParamsColumns);
  };
  return (
    <div className={`table-list-component ${style ? style : ''}`}>
      <div
        className={`table-list-content flex-row flex-no-wrap flex-1 p-b-s border-b border-secondary border-lighten-4 ${headerClass}`}
      >
        {Object.keys(tableColumns).map((item, key) => {
          const columnData = tableColumns[item];
          const columnWidth = {
            flex: columnData.percentWidth * 0.1,
            width: `${columnData.percentWidth}%`
          };
          const orderBy = orderByKeys && orderByKeys.includes(columnData.key);
          return (
            <div key={key} className="flex-column p-r-s p-l-s strong" style={columnWidth}>
              <span className="flex-row flex-middle">
                <span className="column-name truncate flex-column size-extra-small text-secondary text-lighten-3 text-uppercase letter-spacing-1x">
                  {columnData.name}
                </span>
                {orderBy && (
                  <a className="flex-column cursor-pointer" onClick={() => changeOrder(getNewOrder(columnData.key))}>
                    {queryParams.sort && queryParams.sort === 'DESC' ? (
                      <SvgImport
                        key="a"
                        icon={ICONS.ORDER_DESC}
                        className={`icon-extra-small m-l cursor-pointer ${
                          queryParams.column && queryParams.column === columnData.key
                            ? 'fill-primary'
                            : 'fill-secondary'
                        }`}
                      />
                    ) : (
                      <SvgImport
                        key="b"
                        icon={ICONS.ORDER_ASC}
                        className={`icon-extra-small m-l cursor-pointer ${
                          queryParams.column && queryParams.column === columnData.key
                            ? 'fill-primary'
                            : 'fill-secondary'
                        }`}
                      />
                    )}
                  </a>
                )}
              </span>
            </div>
          );
        })}
      </div>
      {!tableData.length && (
        <div className="align-center p-t-lg p-b-lg text-secondary text-lighten-4 height-100">
          <h3>{noDataText}</h3>
        </div>
      )}
      {tableData.map((column, key) => (
        <div
          className={`table-row flex-row flex-no-wrap flex-1 ${column.id &&
            column.id === activeId &&
            asideIsOpen &&
            'active'} ${rowClass || ''} ${column.onClick && 'hover'}`}
          key={key}
        >
          {Object.keys(tableColumns).map((item, index) => {
            const columnData = tableColumns[item];
            const columnWidth = {
              flex: columnData.percentWidth * 0.1,
              width: `${columnData.percentWidth}%`
            };
            if (typeof column[columnData.key] === 'string' || typeof column[columnData.key] === 'number') {
              return (
                <div
                  onClick={() => (column.onClick ? column.onClick() : null)}
                  className="flex-column flex-center p-r-s p-l-s p-b p-t"
                  key={index}
                  style={columnWidth}
                >
                  <span className="text-secondary size-medium truncate">{column[columnData.key] || ''}</span>
                </div>
              );
            }
            if (typeof column[columnData.key] === 'boolean') {
              return (
                <div
                  onClick={() => (column.onClick ? column.onClick() : null)}
                  className="flex-column flex-center p-r-s p-l-s p-b p-t"
                  key={index}
                  style={columnWidth}
                >
                  <span className="text-secondary size-medium truncate">
                    <span className={`${column[columnData.key] && 'active'} boolean`} />
                  </span>
                </div>
              );
            }
            if (column[columnData.key] && column[columnData.key].type) {
              if (column[columnData.key].type === 'switch') {
                if (column[columnData.key].value === null) {
                  return (
                    <div
                      className="flex-column flex-center p-r-s p-l-s p-b p-t switch-container"
                      key={index}
                      style={columnWidth}
                    >
                      <span className="text-secondary text-lighten-4 relative size-medium no-wrap">
                        {column[columnData.key].custonLabel || ''}
                      </span>
                    </div>
                  );
                } else {
                  return (
                    <div
                      className="flex-column flex-center p-r-s p-l-s p-b p-t switch-container"
                      key={index}
                      style={columnWidth}
                      onClick={() => (column.switchAction ? column.switchAction() : null)}
                    >
                      <span className="text-secondary relative size-medium no-wrap">
                        <span className={`${column[columnData.key].value} switch`} />
                        <span
                          className={`truncate hide-on-medium-down small left text-secondary switch-text ${
                            column[columnData.key].value === 'ACTIVE' ? 'text-lighten-1' : 'text-lighten-4'
                          }`}
                        >
                          {/* TABLE_COMPONENT_CONSTANTS[column[columnData.key].value] */}
                        </span>
                      </span>
                    </div>
                  );
                }
              }
              if (column[columnData.key].type === 'button') {
                return (
                  <div
                    className="flex-column flex-center p-r-s p-l-s p-b p-t button-container"
                    key={index}
                    style={columnWidth}
                  >
                    <div className="align-left">
                      <a
                        className={`btn left small-btn btn-border border-primary text-secondary ${column[columnData.key]
                          .icon && 'btn-icon-left'}`}
                        onClick={() => (column[columnData.key].onClick ? column[columnData.key].onClick() : null)}
                      >
                        {column[columnData.key].value}
                        {column[columnData.key].icon && (
                          <span className="icon-area">
                            <SvgImport icon={column[columnData.key].icon} />
                          </span>
                        )}
                      </a>
                    </div>
                  </div>
                );
              }
              if (column[columnData.key].type === 'image') {
                return (
                  <div
                    onClick={() => (column.onClick ? column.onClick() : null)}
                    className="flex-column p-r-s p-l-s p-b p-t"
                    key={index}
                    style={columnWidth}
                  >
                    <span className="text-secondary size-medium truncate">
                      <img src={column[columnData.key].value || ''} />
                    </span>
                  </div>
                );
              }
              if (column[columnData.key].type === 'list') {
                return (
                  <div className="flex-column flex-center p-r text-white p-b p-t p-l" style={columnWidth} key={index}>
                    {column[columnData.key].value.map((data: any, dataKey: any) => (
                      <span key={dataKey} className="text-secondary size-medium truncate p-l-s">
                        {data.firstName}
                      </span>
                    ))}
                  </div>
                );
              }
              if (column[columnData.key].type === 'customComponent') {
                const ContentData = column[columnData.key].value;
                return (
                  <div
                    onClick={() => (column.onClick ? column.onClick() : null)}
                    className="flex-column flex-center p-r-s p-l-s p-b p-t"
                    key={index}
                    style={columnWidth}
                  >
                    <ContentData />
                  </div>
                );
              }
              return (
                <div
                  onClick={() => (column.onClick ? column.onClick() : null)}
                  className="flex-column flex-center p-r text-white p-b p-t"
                  key={index}
                  style={columnWidth}
                >
                  --
                </div>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};
