import React, { FunctionComponent } from 'react';
// import { useTranslation, Trans } from 'react-i18next';
import './Button.scss';

export interface Props {
  /**
   * Text of the button
   * @default ""
   **/
  content: string;
  /**
   * Image of the button
   * @default ""
   **/
  urlImage?: string;
  /**
   * Text of the button
   * @default "success"
   **/
  type?: string;
  /**
   * function to execute on click
   */
  onClick?: (e: unknown) => void;
}

const Button: FunctionComponent<Props> = ({ content, urlImage, type }) => {
  // you can use hook for the translation
  // https://react.i18next.com/latest/usetranslation-hook
  // const { t } = useTranslation();
  // <div>{t('subTitle')}</div>
  return (
    <>
      <div id="button">
        {/* Or you can use the Trans component 
            https://react.i18next.com/latest/trans-component */}
        {/* <Trans i18nKey={content} /> */}
        {urlImage ? (
          <img className={'image-button'} src={urlImage} alt={content} />
        ) : (
          <span className={`button button-${type}`}>
            <i>{content}</i>
          </span>
        )}
      </div>
    </>
  );
};

export default Button;
