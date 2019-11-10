import React, { Component } from "react";
import "./ArticlePricePanel.scss";
import Button from "../../dumb/Button/Button";

interface Props {
  price: any;
}

class ArticlePricePanel extends Component<Props> {
  render() {
    return (
      <section id="article-price-panel">
        <Button content={this.props.price} type={"empty"} />
        <Button content={"+ 1"} type={"success"} />
        <Button
          content={"+ 1"}
          urlImage={"http://ali.edu.uy/img/icons/icon-cart-white.svg"}
          type={"success-outline"}
        />
      </section>
    );
  }
}

export default ArticlePricePanel;
