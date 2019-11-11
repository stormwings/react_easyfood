import React, { Component } from "react";
import "./ConfirmPanel.scss";

interface IProps {
  onConfirm: any;
}

class ConfirmPanel extends Component<IProps> {
  render() {
    const { onConfirm } = this.props;

    // pending improve button
    return (
      <section id="confirm-panel">
        <button
          className="button__confirm"
          onClick={() => onConfirm()}
          type="button"
        >
          <span className="button__confirm__text">Confirm Order</span>
        </button>
      </section>
    );
  }
}

export default ConfirmPanel;
