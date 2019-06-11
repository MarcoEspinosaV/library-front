import * as React from 'react';
import { OPTION_REQUIRED } from '../../constants/appEnums';
import { ICONS } from '../../constants/images';
import { ICostLanguage } from '../../languages/es_EC/cost';
import { SvgImport } from '../../utils/ImgUtils';
import InputComponent from './InputComponent';
import { SelectComponent } from './SelectComponent';
import { SingleOptionCheckComponent } from './SingleOptionCheckComponent';

interface ICostTableComponentProps {
  list: any[];
  sections: any[];
  options?: any;
  extraLabels?: boolean;
  changeCostInput?: (key: string, value: string, index?: number) => void;
  language: string;
  labels: ICostLanguage;
  changeSectionCost?: (value: string, key: number, index: string) => void;
  changeLevelCost?: (value: string, key: number, index: number, sectionId: string, levelId?: string) => void;
  editable?: boolean;
  columnWidth?: number[];
}

interface ICostTableState {
  levelIndex: string[];
}

export default class CostTableComponent extends React.Component<ICostTableComponentProps, ICostTableState> {
  constructor(props: ICostTableComponentProps) {
    super(props);
    this.state = {
      levelIndex: []
    };
  }
  showLevel = (index: string) => {
    const levelIndex = this.state.levelIndex;
    if (!this.state.levelIndex.includes(index)) {
      levelIndex.push(index);
      this.setState({ levelIndex });
    } else {
      const indexOf = this.state.levelIndex.indexOf(index);
      levelIndex.splice(indexOf, 1);
      this.setState({ levelIndex });
    }
  };
  componentWillMount() {
    this.props.sections.forEach(item => {
      const levelIndex = this.state.levelIndex;
      levelIndex.push(item.id);
      this.setState({ levelIndex });
    });
  }
  render() {
    const {
      list,
      sections,
      changeCostInput,
      language,
      options,
      labels,
      changeSectionCost,
      changeLevelCost,
      extraLabels
    } = this.props;
    return (
      <div className="cost-table flex-row flex-no-wrap">
        <div
          className="structure-list"
          style={{
            width: this.props.columnWidth.length && this.props.columnWidth[0] ? this.props.columnWidth[0] : 'auto'
          }}
        >
          {extraLabels && (
            <div>
              <div
                className="structure-item p-t-s p-b-s p-l p-r border-secondary border-b border-lighten-3 text-secondary text-uppercase
                  secondary-font small letter-spacing-1x text-lighten-2 strong flex-row flex-middle"
              >
                {labels.COSTS_TYPE}
              </div>
              <div
                className="structure-item p-t-s p-b-s p-l p-r border-secondary border-b border-lighten-3 text-secondary text-uppercase
                  secondary-font small letter-spacing-1x text-lighten-2 strong flex-row flex-middle"
              >
                {labels.COSTS_FOR_LEVEL}
              </div>
              <div
                className="structure-item p-t-s p-b-s p-l p-r border-secondary border-b border-lighten-3 text-secondary text-uppercase
                  secondary-font small letter-spacing-1x text-lighten-2 strong flex-row flex-middle"
              >
                {labels.HAS_TAXES}
              </div>
              <div
                className="structure-item p-t-s p-b-s p-l p-r border-secondary border-b border-lighten-3 text-secondary text-uppercase
                  secondary-font small letter-spacing-1x text-lighten-2 strong flex-row flex-middle"
              >
                {labels.NUMBER_OF_PAYMENTS}
              </div>
              <div
                className="structure-item p-t-s p-b-s p-l p-r border-secondary border-b border-lighten-3 text-secondary
                primary-font flex-row flex-middle"
              >
                {labels.ALL}
              </div>
            </div>
          )}
          {sections.map((item: any, key: number) => (
            <div key={key}>
              <div
                title={item.name}
                className={`structure-item p-t-s p-b-s p-r border-secondary border-b border-lighten-3 flex-row flex-middle
                cursor-pointer ${!item.levels && 'p-l'}`}
                onClick={() => (item.levels ? this.showLevel(item.id) : {})}
              >
                <div className="truncate">
                  {item.levels && item.levels.length && (
                    <SvgImport icon={ICONS.DASHED} className="dashed-icon icon-small left" />
                  )}
                  {item.name}
                </div>
              </div>
              {this.state.levelIndex.includes(item.id) &&
                item.levels.map((value: any, index: number) => (
                  <div
                    key={index}
                    className="structure-item p-t-s p-b-s p-r p-l-lg border-secondary border-b flex-row flex-middle border-lighten-3"
                  >
                    {value.name}
                  </div>
                ))}
            </div>
          ))}
        </div>
        <div className="structure-list-values flex-row flex-no-wrap width-100 height-100">
          {list.map((item: any, key: number) => (
            <div
              key={key}
              className="column-cost"
              style={{
                width:
                  this.props.columnWidth.length && this.props.columnWidth[key + 1]
                    ? this.props.columnWidth[key + 1] + 1
                    : 'auto'
              }}
            >
              {extraLabels && (
                <div className="width-100">
                  <div className="list-item">
                    <SelectComponent
                      disable={item.noEdit}
                      id="required"
                      noDataText=""
                      options={Object.keys(options).map(option => OPTION_REQUIRED[option])}
                      onChange={(indexValue, value) => changeCostInput(indexValue, value.id, key)}
                      language={language}
                      optionKeyValue="name"
                      value={item.required ? options.TRUE[`name_${language}`] : options.FALSE[`name_${language}`]}
                      selectType="SIMPLE"
                    />
                  </div>
                  <div
                    className="list-item empty border-b border-secondary border-lighten-3"
                    style={{ width: this.props.columnWidth ? this.props.columnWidth[key + 1] : 'auto' }}
                  />
                  <div
                    className="list-item empty p-l-s flex-middle flex-row border-b border-secondary border-lighten-3"
                    style={{ width: this.props.columnWidth ? this.props.columnWidth[key + 1] : 'auto' }}
                  >
                    <SingleOptionCheckComponent
                      iconClass="icon-extra-small"
                      labelClass="primary-font text-secondary line-height-regular m-l-s m-r-s"
                      label={labels.TAXES}
                      isSelected={item.hasTaxes}
                      onChange={(value: any) => changeCostInput('hasTaxes', value, key)}
                    />
                  </div>
                  <div
                    className="list-item empty p-l-s flex-middle flex-row border-b border-secondary border-lighten-3"
                    style={{ width: this.props.columnWidth ? this.props.columnWidth[key + 1] : 'auto' }}
                  >
                    <div className={`${item.noEdit && 'disable-content'} flex-row`}>
                      <div className="flex-column">
                        <SingleOptionCheckComponent
                          iconClass="icon-extra-small"
                          labelClass="primary-font text-secondary line-height-regular m-l-s m-r-s"
                          label={'1'}
                          isSelected={+item.numberOfPayments === 1}
                          onChange={() => changeCostInput('numberOfPayments', '1', key)}
                        />
                      </div>
                      <div className="flex-column">
                        <SingleOptionCheckComponent
                          iconClass="icon-extra-small"
                          labelClass="primary-font text-secondary line-height-regular m-l-s m-r-s"
                          label={'10'}
                          isSelected={+item.numberOfPayments === 10}
                          onChange={() => changeCostInput('numberOfPayments', '10', key)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="list-item" style={{ width: this.props.columnWidth[key + 1] }}>
                    <InputComponent
                      label=""
                      placeholder=""
                      onChange={(indexValue, value) => changeCostInput(indexValue, value, key)}
                      value={item.totalCost}
                      id="totalCost"
                      inputType="SIMPLE"
                      className="bg-secondary bg-lighten-5"
                    />
                  </div>
                </div>
              )}
              {item.levels.map((level: any, levelKey: number) => (
                <div key={levelKey}>
                  {(levelKey === 0 || level.section !== item.levels[levelKey - 1].section) && (
                    <div
                      className="list-item"
                      style={{ width: this.props.columnWidth ? this.props.columnWidth[key + 1] : 'auto' }}
                    >
                      <InputComponent
                        label=""
                        placeholder=""
                        onChange={(indexValue, value) => changeSectionCost(value, key, level.section)}
                        value={level.totalCost}
                        id="totalCost"
                        inputType="SIMPLE"
                        className={!item.readOnly && 'bg-secondary bg-lighten-5'}
                        readOnly={item.readOnly}
                      />
                    </div>
                  )}
                  {this.state.levelIndex.includes(level.section) && (
                    <div
                      className="list-item"
                      style={{ width: this.props.columnWidth ? this.props.columnWidth[key + 1] : 'auto' }}
                    >
                      <InputComponent
                        label=""
                        placeholder="0.00"
                        onChange={(indexValue, value) =>
                          changeLevelCost(
                            value.includes('$') ? value.slice(2, value.length) : value,
                            key,
                            levelKey,
                            level.section,
                            level.id
                          )
                        }
                        value={level.value ? '$ ' + level.value : ''}
                        id="value"
                        inputType="SIMPLE"
                        className={!level.readOnly && 'bg-secondary bg-lighten-5'}
                        readOnly={level.readOnly}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
