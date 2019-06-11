import * as React from 'react';
import { TRUE_FALSE } from '../../constants/appEnums';
import { ICONS } from '../../constants/images';

interface ITrueFalseSelectorComponent {
  label?: string;
  id: string;
  value: boolean;
  error?: string;
  language: string;
  required?: boolean;
  onChangeInput: (key: string, value: string) => void;
  customIcon?: string;
}

export default class TrueFalseSelectorComponent extends React.Component<ITrueFalseSelectorComponent> {
  constructor(props: ITrueFalseSelectorComponent) {
    super(props);
  }
  onPressEnter = (e: any, id: string) => {
    switch (e.key) {
      case 'Enter':
        return this.props.onChangeInput(this.props.id, id);
    }
  };
  render() {
    const { label, id, value, error, language, required, onChangeInput, customIcon } = this.props;
    const icon = customIcon ? customIcon : ICONS.SELECT;
    return (
      <div className={`${error ? 'error' : ''} true-false-selector p-l-s p-r-s`}>
        {label && (
          <label className="secondary-font text-secondary text-lighten-1 small letter-spacing-1x strong truncate p-b-s p-t-s">
            {label} {required ? ' *' : ''}
          </label>
        )}
        <div className="flex-row m-t-s">
          {Object.keys(TRUE_FALSE).map((key: any, index) => (
            <div
              key={index}
              className="flex-row flex-middle selector-item p-r-lg relative"
              tabIndex={0}
              onKeyPress={e => this.onPressEnter(e, TRUE_FALSE[key].id)}
            >
              <div
                className={`item-selector ${TRUE_FALSE[key].id === value && 'active'}`}
                onClick={() => onChangeInput(id, TRUE_FALSE[key].id)}
              />
              <div className="p-l-lg">{TRUE_FALSE[key][`name_${language}`]}</div>
            </div>
          ))}
        </div>
        {error && <div className="secondary-font text-warning size-extra-small align-right">{error}</div>}
      </div>
    );
  }
}
