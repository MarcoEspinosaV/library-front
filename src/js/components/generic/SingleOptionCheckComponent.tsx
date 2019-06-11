import * as React from 'react';

import { ICONS } from '../../constants/images';

interface ISingleOptionCheckComponent {
  isSelected?: boolean;
  label: string;
  onChange: (value: boolean) => void;
  labelClass?: string;
  iconClass?: string;
}

export const SingleOptionCheckComponent = (props: ISingleOptionCheckComponent) => {
  const { iconClass, isSelected, label, onChange, labelClass } = props;
  return (
    <div className="flex-row flex-middle flex-no-wrap cursor-pointer" onClick={() => onChange(!isSelected)}>
      <div className="cursor-pointer">
        <img className={`${iconClass || ''}`} src={!isSelected ? ICONS.NO_SELECT : ICONS.SELECT} alt="" />
      </div>
      <div className={`${labelClass || 'primary-font text-secondary line-height-regular m-l'}`}>{label}</div>
    </div>
  );
};
