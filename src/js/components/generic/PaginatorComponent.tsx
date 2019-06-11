import * as React from 'react';
import { IPaginate } from '../../../customTypes/globalInterface';
import { removeUrlParams, updateUrlParams } from '../../utils/UrlUtils';

interface IPaginator {
  onClick: any;
  paginate: IPaginate;
}

export default (props: IPaginator) => {
  const { paginate, onClick } = props;
  if (paginate.totalPage < 2) {
    return null;
  }
  const newPageParams = (page: number) => {
    const filters = updateUrlParams('page', page);
    props.onClick(filters);
  };
  const onClickActionBack = () => {
    if (paginate.page > 1) {
      newPageParams(paginate.page - 1);
    }
  };
  const onClickAction = (page: number) => {
    newPageParams(page);
  };
  const onClickActionAfter = () => {
    if (paginate.page < paginate.totalPage) {
      newPageParams(paginate.page + 1);
    }
  };
  const classGeneric = ['btn', 'btn-border', 'small-btn'].join(' ');

  const listButton = () => {
    let buttons = Array.from(Array(paginate.totalPage).keys());
    if (paginate.page === 1) {
      buttons = buttons.splice(paginate.page + 1, 5);
    } else if (paginate.page === 2) {
      buttons = buttons.splice(paginate.page, 5);
    } else if (paginate.page === 3) {
      buttons = buttons.splice(paginate.page - 1, 5);
    } else if (paginate.page >= 4 && paginate.page <= paginate.totalPage - 3) {
      buttons = buttons.splice(paginate.page - 2, 5);
    } else if (paginate.page === paginate.totalPage - 2) {
      buttons = buttons.splice(paginate.page - 3, 5);
    } else if (paginate.page === paginate.totalPage - 1) {
      buttons = buttons.splice(paginate.page - 4, 5);
    } else if (paginate.page === paginate.totalPage) {
      buttons = buttons.splice(paginate.page - 5, 5);
    }
    return buttons.map(obj => (
      <a
        key={obj}
        className={`${paginate.page === obj ? 'bg-secondary bg-lighten-4' : ''} ${classGeneric}`}
        onClick={() => onClickAction(obj)}
      >
        <span>{obj}</span>
      </a>
    ));
  };

  return (
    <div className="flex-row m-t-lg  flex-middle">
      <div className="flex-column size-medium flex-1 flex-right p-r">
        pagina {paginate.page} de {paginate.totalPage}
      </div>
      <div className="flex-column flex-right m-t m-b">
        <div className="btn-group">
          <a className={`${paginate.page === 1 ? 'disable-btn' : ''} ${classGeneric}`} onClick={onClickActionBack}>
            <span>{'←'}</span>
          </a>
          <a
            className={`${paginate.page === 1 ? 'bg-secondary bg-lighten-4' : ''} ${classGeneric}`}
            onClick={() => onClickAction(1)}
          >
            <span>{paginate.page > 4 ? '1..' : '1'}</span>
          </a>
          {listButton()}
          {paginate.totalPage > 1 && (
            <a
              className={`${paginate.page === paginate.totalPage ? 'bg-secondary bg-lighten-4' : ''} ${classGeneric}`}
              onClick={() => onClickAction(paginate.totalPage)}
            >
              <span>
                {paginate.totalPage > 7 && paginate.page < paginate.totalPage - 3
                  ? `..${paginate.totalPage}`
                  : paginate.totalPage}
              </span>
            </a>
          )}
          <a
            className={`${paginate.page === paginate.totalPage ? 'disable-btn' : ''} ${classGeneric}`}
            onClick={onClickActionAfter}
          >
            <span>{'→'}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
