import React, { FunctionComponent } from 'react';
import './Separator.scss';

interface Props {
  theme?: string;
  marginTop?: number;
  marginBottom?: number;
}

const Separator: FunctionComponent<Props> = ({ theme, marginTop, marginBottom }) => {
  const classTheme = `theme-${theme ? theme : 'default'} `;
  const classMarginTop = marginTop ? `margin-top-${marginTop}px ` : '';
  const classMarginBottom = marginBottom ? `margin-bottom-${marginBottom}px ` : '';

  const className = classTheme + classMarginTop + classMarginBottom;
  return (
    <div id="separator">
      <hr className={`${className}`} />
    </div>
  );
};

export default Separator;
