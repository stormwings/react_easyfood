import React, { FunctionComponent } from 'react';
import './TextHalfBlack.scss';

interface Props {
  firstName: string;
}

const TextHalfBlack: FunctionComponent<Props> = ({ firstName }) => {
  return (
    <p id="text-half-black">
      Hello <b className="black">{firstName}</b>!
    </p>
  );
};

export default TextHalfBlack;
