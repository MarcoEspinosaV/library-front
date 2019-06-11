import * as React from 'react';
import { ICONS } from '../../constants/images';
import { IAllocationQuotasLanguage } from '../../languages/es_EC/allocationQuotas';
import { SvgImport } from '../../utils/ImgUtils';
import TooltipComponent from './TooltipComponent';

interface IStudentCardAllocationComponentInterface {
  student: any;
  styles?: any;
  showStatus?: boolean;
  sideNavIsOpen?: boolean;
  labels: IAllocationQuotasLanguage;
}

export default class StudentCardAllocationComponent extends React.Component<IStudentCardAllocationComponentInterface> {
  render() {
    const { sideNavIsOpen, labels, showStatus, student, styles } = this.props;
    return (
      <div
        style={styles || {}}
        className={`${student.preselected && 'card-preselect'} ${sideNavIsOpen &&
          'open-side-nav'} ${(student.onSelect || student.onDelete) &&
          'hovered-card'} width-100 p-b p-t p-l-s p-r-s radius bg-white card-allocation-container flex-row flex-no-wrap`}
      >
        <div className="option-view-detail" onClick={() => student.onShowDetail()} />
        <div className="flex-column card-allocation-image-container">
          <div
            className={`${
              student.gender
            } card-allocation-image border border-w-4 border-info border-darken-1 bg-info bg-lighten-2`}
            style={{
              backgroundImage: `url(${
                student.image ? student.image : student.gender === 'MALE' ? ICONS.CHILDREN_MAN : ICONS.CHILDREN_WOMAN
              })`
            }}
          />
        </div>
        <div className="flex-column flex-1 card-allocation-text-container flex-center">
          <div className="size-default strong text-secondary p-b-s line-height-small">
            <span className="truncate">{`${student.name} ${student.lastName}`}</span>
          </div>
          <div className="size-medium light text-secondary text-lighten-1">
            <span className="p-r-s inline-block">
              <span>{labels.CARD.AGE}: </span>
              <strong>
                {student.currentAge.years}
                {labels.CARD.YEAR_ABBR} · {student.currentAge.months}
                {labels.CARD.MONT_ABBR}
              </strong>
            </span>
            <span className="inline-block">
              <span>{labels.CARD.AGE_TO_START}: </span>
              <strong>
                {student.ageToStartProgram.years}
                {labels.CARD.YEAR_ABBR} · {student.ageToStartProgram.months}
                {labels.CARD.MONT_ABBR}
              </strong>
            </span>
          </div>
          <div className="size-medium light text-secondary text-lighten-1">
            <span className="p-r-s inline-block">
              {student.applicationDate ? (
                <span>
                  {labels.CARD.APPLICATION}: <strong>{student.applicationDate}</strong>
                </span>
              ) : (
                <span>{'  '}</span>
              )}
            </span>
          </div>
          <div className="width-100 flex-row p-t-s tooltip-list">
            <div className="flex-column flex-1 p-r">
              <div className="flex-row">
                {student.brothersInSchool ? (
                  <div className="flex-column m-r-s">
                    <TooltipComponent
                      content={<div className="no-wrap">{labels.CARD.BROTHERS_SUBSCRIBE}</div>}
                      position="bottomLeft"
                    >
                      <div className="flex-row flex-middle">
                        <span className="tooltip-status info-indicator" />
                        <SvgImport icon={ICONS.BROTHERS} className="icon-extra-small fill-secondary" />
                      </div>
                    </TooltipComponent>
                  </div>
                ) : (
                  ''
                )}
                {student.previousGroups && student.previousGroups.length ? (
                  <div className="flex-column m-r-s">
                    <TooltipComponent
                      content={
                        <div className="no-wrap align-left">
                          <strong>{labels.CARD.PREVIOUS_GROUP_TOOLTIP}</strong>
                          {student.previousGroups.map((item: any, key: any) => {
                            return (
                              <div key={key} className="no-wrap">
                                {item.name}
                              </div>
                            );
                          })}
                        </div>
                      }
                      position="bottomLeft"
                    >
                      <div className="flex-row flex-middle">
                        <span className="tooltip-status success-indicator" />
                        <SvgImport icon={ICONS.PREVIOUS_GROUPS} className="icon-extra-small fill-secondary" />
                      </div>
                    </TooltipComponent>
                  </div>
                ) : (
                  ''
                )}
                {student.currentGroups && student.currentGroups.length ? (
                  <div className="flex-column m-r-s">
                    <TooltipComponent
                      content={
                        <div className="no-wrap align-left">
                          <strong>{labels.CARD.CURRENT_GROUPS_TOOLTIP}</strong>
                          {student.currentGroups.map((item: any, key: any) => {
                            return (
                              <div key={key} className="no-wrap">
                                {item.name}
                              </div>
                            );
                          })}
                        </div>
                      }
                      position="bottomLeft"
                    >
                      <div className="flex-row flex-middle">
                        <span className="tooltip-status warning-indicator" />
                        <SvgImport icon={ICONS.CURRENT_GROUPS} className="icon-extra-small fill-secondary" />
                      </div>
                    </TooltipComponent>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
            {showStatus && (
              <div className="flex-column">
                <span className={`${student.contractStatus} status-label`}>
                  {student.contractStatus ? labels.CARD.STATUS[student.contractStatus] : labels.CARD.STATUS.PENDING}
                </span>
              </div>
            )}
          </div>
        </div>
        {(student.onSelect || student.onDelete) && (
          <div className={`${student.onDelete && 'option-delete'} options-nav flex-column flex-center`}>
            <div className="flex-row no-wrap option-list">
              {student.onSelect && (
                <div className="flex-column m-r-s">
                  <a className={`${student.preselected && 'active'} icon-selected`} onClick={() => student.onSelect()}>
                    <SvgImport icon={ICONS.CHECK_STRONG} className="icon-extra-small fill-white" />
                  </a>
                </div>
              )}
              {student.onDelete && (
                <div className="flex-column m-r-s delete-button">
                  <a className="cursor-pointer" onClick={() => student.onDelete()}>
                    <TooltipComponent content={labels.CARD.DELETE} position="topLeft">
                      <SvgImport icon={ICONS.TRASH} className="icon-small fill-warning" />
                    </TooltipComponent>
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}
