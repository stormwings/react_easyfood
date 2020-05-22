import React, { Component, Fragment } from "react";

import TitlePanel from "../../smart/TitlePanel/TitlePanel";
import DescriptionTable from "../../smart/DescriptionTable/DescriptionTable";
import ArticleResumeList from "../../smart/ArticleResumeList/ArticleResumeList";
import TotalCostTable from "./../../smart/TotalCostTable/TotalCostTable";

const articles: any = [
  {
    _id: 1,
    title: "Meat menu",
    price: "8U$D",
    image: "https://image.flaticon.com/icons/svg/1890/1890012.svg",
    delivery: "0.5U$D - 30m"
  },
  {
    _id: 2,
    title: "Burger XXL",
    price: "3U$D",
    image: "https://image.flaticon.com/icons/svg/1365/1365540.svg",
    delivery: "0.5U$D - 15m"
  },
  {
    _id: 3,
    title: "Pizza M",
    price: "4U$D",
    image: "https://image.flaticon.com/icons/svg/135/135646.svg",
    delivery: "FREE - 30m"
  }
];

const informationCells = [
  {
    info: "Address",
    value: "Aguero 777"
  },
  {
    info: "Delivery Time",
    value: "Aprox 22 minutes"
  }
];

const cells = [
  {
    info: "Product Cost",
    value: "$5,25"
  },
  {
    info: "Delivery",
    value: "$0.50"
  },
  {
    info: "Bill",
    value: "$0.10"
  },
  {
    info: "Discount",
    value: "$-1,00"
  }
];

class Order extends Component {
  render() {
    return (
      <Fragment>
        <TitlePanel title={"Order"} />
        <DescriptionTable cells={informationCells} />
        <ArticleResumeList articles={articles} />
        <TotalCostTable cells={cells} />
      </Fragment>
    );
  }
}

export default Order;
