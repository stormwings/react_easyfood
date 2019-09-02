import React, { Component, Fragment } from 'react';

import './Checkout.scss';

class Checkout extends Component {
  render() {
    return (
      <Fragment>
        <section id="section_thirdteen">
          <div className="checkout__header">
            <h2 className="checkout__header__title">Checkout</h2>
          </div>
        </section>
        <section id="section_fourteen">
          <div className="checkout__address">
            <div className="checkout__address__title">
              <p className="text">Address</p>
            </div>
            <div className="checkout__address__direction">
              <p className="text">Aguero 777</p>
            </div>
          </div>
          <hr className="hr-4" />
          <div className="checkout__delivery">
            <div className="checkout__delivery__title">
              <p className="text">Delivery Time</p>
            </div>
            <div className="checkout__delivery__time">
              <p className="text">Aprox 22 minutes</p>
            </div>
          </div>
        </section>
        <section id="section_fiveteen">
          <div className="payment">
            <div className="payment__title">Payment</div>
            <div className="payment__card">
              <img className="payment__card__image" src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="" />
              <div className="payment__card__number">1648</div>
            </div>
            <div className="payment__option">
              <button className="payment__option__change">Change</button>
            </div>
          </div>
        </section>
        <section id="section_sixteen">
          <div className="cart__header">
            <h5 className="cart__header__subtitle">Items</h5>
            <h4 className="cart__header__title">Resume</h4>
          </div>
          <div className="cart__article">
            <div className="cart__article__item">
              <img className="cart__article__item__image" src="https://image.flaticon.com/icons/svg/135/135646.svg" alt="" />
              <div className="cart__article__item__info">
                <div className="cart__article__item__info__title">Pizza XL</div>
                <div className="cart__article__item__info__subtitle">Pizza Hut</div>
                <div className="cart__article__item__info__action">
                  - <span>Delete</span>
                </div>
              </div>
            </div>
            <div className="cart__article__price">
              <div className="cart__article__price__counter">
                <button>+</button>
                <div>1</div>
                <button>-</button>
              </div>
              <div className="cart__article__price__total">$5,25</div>
            </div>
          </div>
        </section>
        <section id="section_seventeen">
          <div className="confirm__payment">
            <div className="confirm__payment__column">
              <div className="confirm__payment__column__title">Product Cost</div>
              <div className="confirm__payment__column__value">$5,25</div>
            </div>
            <div className="confirm__payment__column">
              <div className="confirm__payment__column__title">Delivery</div>
              <div className="confirm__payment__column__value">$0.50</div>
            </div>
            <div className="confirm__payment__column">
              <div className="confirm__payment__column__title">Bill</div>
              <div className="confirm__payment__column__value">$0.10</div>
            </div>
            <div className="confirm__payment__column">
              <div className="confirm__payment__column__title">Discount</div>
              <div className="confirm__payment__column__value discount">$-1,00</div>
            </div>
            <hr className="hr-14" />
            <div className="confirm__payment__column">
              <div className="confirm__payment__column__title">Total</div>
              <div className="confirm__payment__column__value">$4,85</div>
            </div>
          </div>
        </section>
        <section id="section_eightteen">
          <button className="button__confirm" type="button">
            <span className="button__confirm__text">Confirm Order</span>
          </button>
        </section>
      </Fragment>
    );
  }
}

export default Checkout;
