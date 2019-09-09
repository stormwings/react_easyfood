import React, { FunctionComponent } from 'react';
import './TitlePanel.scss';

interface Props {
  title: string;
  subtitle?: string;
  fontFamily?: string;
  fontBold?: boolean;
  fontSize?: string;
  redirection?: any;
}

const TitlePanel: FunctionComponent<Props> = ({ title, subtitle, redirection, fontFamily, fontBold, fontSize }) => {
  // pending improve classes as hr and button, improve sizes
  return (
    <section id="title-panel">
      <div className="title-panel__box">
        <h2 className={`title-panel__box__title ${fontFamily ? fontFamily : ''} ${fontBold ? 'bold' : ''} ${fontSize ? fontSize : ''}`}>
          {title}
        </h2>
        {subtitle && <p className="title-panel__box__subtitle">{subtitle}</p>}
      </div>
      {redirection && (
        <a className="title-panel__link" href={redirection.link}>
          {redirection.name} >>
        </a>
      )}
    </section>
  );
};

export default TitlePanel;
