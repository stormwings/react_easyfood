import React, { Fragment, FunctionComponent } from 'react';
import './Input.scss';

import SvgSearch from '../../Svg/SVGSearch';

interface Props {
  placeholder?: string;
  bindInput: any;
  name: string;
}

const Input: FunctionComponent<Props> = props => {
  const { name, placeholder, bindInput } = props;

  return (
    <Fragment>
      <input
        ref={bindInput}
        className="search-form__input"
        name={name}
        type="search"
        placeholder={placeholder ? placeholder : ''}
        autoComplete="false"
      />
      <button
        className="search-form__button"
        type="submit"
        // untargeteteable/unfocuseable
        tabIndex={-1}
      >
        <SvgSearch className="search-form__button__icon" />
      </button>
    </Fragment>
  );
};

export default Input;
