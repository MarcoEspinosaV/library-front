import * as React from 'react';

import { ICONS } from '../../constants/images';

interface ISearchComponent {
  placeholder?: string;
  value: string;
  onChangeSearch: (value: string) => void;
  actionSearch: () => void;
}

export class SearchComponent extends React.Component<ISearchComponent, any> {
  constructor(props: ISearchComponent) {
    super(props);
  }
  handleEnterKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      this.props.actionSearch();
    }
  };
  handleButtonClick = (e: any) => {
    this.props.actionSearch();
  };
  handleOnChange = (e: any) => {
    this.props.onChangeSearch(e.target.value);
  };
  render() {
    const { placeholder, actionSearch } = this.props;

    const searchClass = [
      'search-component',
      'flex-row',
      'flex-middle',
      'center',
      'border-secondary',
      'border-lighten-3',
      'border',
      'radius',
      'bg-secondary',
      'bg-lighten-5'
    ].join(' ');
    const searchInputClass = [
      'no-border',
      'bg-secondary',
      'bg-lighten-5',
      'flex-column',
      'color-secondary',
      'p-l-s',
      'p-r-s',
      'size-medium',
      'search-input'
    ].join(' ');
    return (
      <div className={searchClass}>
        <a className="flex-column p-l-s">
          <img className="icon-extra-small" onClick={this.handleButtonClick} src={ICONS.SEARCH} />
        </a>
        <input
          className={searchInputClass}
          placeholder={placeholder || ''}
          type="text"
          value={this.props.value}
          onChange={this.handleOnChange}
          onKeyPress={this.handleEnterKeyPress}
        />
      </div>
    );
  }
}
