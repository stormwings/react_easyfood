import React, { Component } from "react";
import "./PaymentPanel.scss";
import Button from "../../dumb/Button/Button";

interface IProps {
  paymentInfo: any;
}

class PaymentPanel extends Component<IProps> {
  render() {
    const changePaymentTrigger = () => console.log("change payment");
    const {
      paymentInfo: { paymentImage, paymentLastNumbers }
    } = this.props;
    // this data comes from backend
    return (
      <section id="payment-panel">
        <div className="payment">
          <div className="payment__title">Payment</div>
          <div className="payment__card">
            <img className="payment__card__image" src={paymentImage} alt="" />
            <div className="payment__card__number">{paymentLastNumbers}</div>
          </div>
          <div className="payment__option">
            <Button
              content={"Change"}
              className={"payment__option__change"}
              onClick={changePaymentTrigger}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default PaymentPanel;
