import React, { FunctionComponent } from "react";
import "./Button.scss";

export interface Props {
  /**
   * Text of the button
   * @default ""
   **/
  content: string;
  /**
   * Text of the button
   * @default ""
   **/
  className?: string;
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
  onClick?: any;
}

const Button: FunctionComponent<Props> = props => {
  const { content, urlImage, type, className, onClick } = props;
  const actionFunction = () => (onClick ? onClick() : onClickDefault());
  return (
    <div
      id="button"
      className={className ? className : ""}
      onClick={() => actionFunction()}
    >
      {urlImage ? (
        <img className={"image-button"} src={urlImage} alt={content} />
      ) : (
        <span className={`button button-${type}`}>
          <i>{content}</i>
        </span>
      )}
    </div>
  );
};

const onClickDefault = () => {
  console.log("default button function!");
};

export default Button;
