import * as React from 'react';
import { IEnum } from '../../constants/appEnums';
import { ICONS } from '../../constants/images';
import { getQueryParams, getQueryParamsArray, removeUrlParams, updateUrlParams } from '../../utils/UrlUtils';
import ButtonComponent from './ButtonComponent';
import FilterComponent from './FilterComponent';
import { SearchComponent } from './SearchComponent';

interface IListHeaderComponent {
  searchAction?: (searchUrl: string) => void;
  filterAction?: (searchUrl: string) => void;
  searchText?: string;
  compactButton?: boolean;
  buttonAction: () => void;
  buttonText: string;
  disableButton?: boolean;
  filterOptions?: IEnum[];
  filterKey?: string;
  filterText?: string;
  optionsKeyValueForFilter?: string;
}

export default class ListHeaderComponent extends React.Component<IListHeaderComponent, any> {
  constructor(props: IListHeaderComponent) {
    super(props);
    this.state = {
      filter: [],
      searchText: ''
    };
  }
  onSearch = () => {
    let filters = this.state.searchText ? updateUrlParams('search', this.state.searchText) : removeUrlParams('search');
    filters = removeUrlParams('page', filters);
    this.props.searchAction(filters);
  };
  onFilter = (filterItem: IEnum) => {
    const { optionsKeyValueForFilter, filterKey, filterAction } = this.props;
    const filterValue = optionsKeyValueForFilter ? filterItem[optionsKeyValueForFilter] : filterItem.id;
    const currentParams = getQueryParamsArray().filter(item => item.key === this.props.filterKey);
    let activeFilters = [];
    if (currentParams.find(item => item.value === filterValue)) {
      activeFilters = currentParams.filter(item => item.value !== filterValue);
    } else {
      activeFilters = [
        ...currentParams,
        {
          key: filterKey,
          value: filterValue
        }
      ];
    }
    let filter = removeUrlParams(filterKey);
    filter = removeUrlParams('page', filter);
    const newStateFilters: any = [];
    activeFilters.forEach(item => {
      newStateFilters.push(item.value);
      if (!filter) {
        filter += `?${filterKey}=${item.value}`;
      } else {
        filter += `&${filterKey}=${item.value}`;
      }
    });
    this.setState({
      filter: newStateFilters
    });
    filterAction(filter);
  };
  onChangeSearch = (searchText: string) => {
    this.setState({
      searchText
    });
  };
  componentDidMount(): void {
    const { filterKey } = this.props;
    const params = getQueryParams();
    const paramsArray = getQueryParamsArray()
      .filter(item => item.key === filterKey)
      .map(item => item.value);
    this.setState({
      filter: paramsArray,
      searchText: params.search || ''
    });
  }
  render() {
    const {
      buttonAction,
      filterAction,
      filterOptions,
      searchText,
      searchAction,
      filterText,
      buttonText,
      compactButton,
      disableButton,
      optionsKeyValueForFilter
    } = this.props;
    return (
      <div className="flex-row width-100">
        {searchAction && (
          <div className="flex-column p-r">
            <SearchComponent
              value={this.state.searchText}
              placeholder={searchText}
              onChangeSearch={this.onChangeSearch}
              actionSearch={this.onSearch}
            />
          </div>
        )}
        {filterAction && (
          <div className="flex-column">
            <FilterComponent
              icon={ICONS.FILTER}
              options={filterOptions || []}
              onSelect={this.onFilter}
              label={filterText}
              values={this.state.filter}
              inputPlaceHolder={filterText}
              optionsKeyValueForFilter={optionsKeyValueForFilter || null}
            />
          </div>
        )}
        <div className="flex-column flex-1 flex-right">
          <div>
            <ButtonComponent
              smallButton={true}
              text={compactButton ? '+' : buttonText}
              onClick={buttonAction}
              disable={disableButton}
            />
          </div>
        </div>
      </div>
    );
  }
}
