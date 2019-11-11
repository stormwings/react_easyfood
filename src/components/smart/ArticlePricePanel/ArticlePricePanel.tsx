import React, { Component } from "react";
import Button from "../../dumb/Button/Button";
import "./ArticlePricePanel.scss";

interface Props {
  price: any;
}

class ArticlePricePanel extends Component<Props> {
  render() {
    const { price } = this.props;
    const onGoCheckout = () => console.log("go checkout!");
    const onAddProductToCart = () => console.log("added to cart!");
    const onShowMiniDetail = () => console.log("show details product!");

    return (
      <section id="article-price-panel">
        <Button onClick={onShowMiniDetail} content={price} type={"empty"} />
        <Button onClick={onAddProductToCart} content={"+ 1"} type={"success"} />
        <Button
          onClick={onGoCheckout}
          content={"+ 1"}
          urlImage={"http://ali.edu.uy/img/icons/icon-cart-white.svg"}
          type={"success-outline"}
        />
      </section>
    );
  }
}

export default ArticlePricePanel;
