import * as React from 'react';
import { GENDERS } from '../../constants/appEnums';
import { ICONS } from '../../constants/images';

interface IGenderSelectorComponent {
  label?: string;
  id: string;
  value: string;
  error?: string;
  language: string;
  required?: boolean;
  onChangeGender: (key: string, value: string) => void;
  customIcon?: string;
}

export default class GenderSelectorComponent extends React.Component<IGenderSelectorComponent> {
  constructor(props: IGenderSelectorComponent) {
    super(props);
  }
  onPressEnter = (e: any, id: string) => {
    switch (e.key) {
      case 'Enter':
        return this.props.onChangeGender(this.props.id, id);
    }
  };
  render() {
    const { label, id, value, error, language, required, onChangeGender, customIcon } = this.props;
    const icon = customIcon ? customIcon : ICONS.SELECT;
    return (
      <div className={`${error ? 'error' : ''} gender-selector`}>
        {label && (
          <label className="secondary-font text-secondary text-lighten-1 small letter-spacing-1x strong">
            {label} {required ? ' *' : ''}
          </label>
        )}
        <div className="flex-row m-t-s">
          {Object.keys(GENDERS).map((key: any, index) => (
            <div
              key={index}
              className="selector-item flex-row flex-middle"
              tabIndex={0}
              onKeyPress={e => this.onPressEnter(e, GENDERS[key].id)}
            >
              <img
                src={error ? ICONS.WARNING_CIRCLE_ICON : !value || key !== GENDERS[value].id ? ICONS.NO_SELECT : icon}
                onClick={() => onChangeGender(id, GENDERS[key].id)}
              />
              <div className="p-l-s">{GENDERS[key][`name_${language}`]}</div>
            </div>
          ))}
        </div>
        {error && <div className="secondary-font text-warning size-extra-small align-right">{error}</div>}
      </div>
    );
  }
}
