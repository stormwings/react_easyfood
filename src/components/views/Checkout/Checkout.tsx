import React, { Component, Fragment } from "react";

import TitlePanel from "../../smart/TitlePanel/TitlePanel";
import DescriptionTable from "../../smart/DescriptionTable/DescriptionTable";
import PaymentPanel from "../../smart/PaymentPanel/PaymentPanel";
import ArticleResumeList from "../../smart/ArticleResumeList/ArticleResumeList";
import TotalCostTable from "./../../smart/TotalCostTable/TotalCostTable";
import ConfirmPanel from "../../smart/ConfirmPanel/ConfirmPanel";

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

const paymentData = {
  paymentImage:
    "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
  paymentLastNumbers: "1648"
};

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

const onDeleteArticle = () => console.log("delete article");
const onAdd = () => console.log("+");
const onRest = () => console.log("-");
const onConfirm = () =>
  console.log({ articles, informationCells, paymentData, cells });

class Checkout extends Component {
  render() {
    return (
      <Fragment>
        <TitlePanel title={"Checkout"} />
        <DescriptionTable cells={informationCells} />
        <PaymentPanel paymentInfo={paymentData} />
        <ArticleResumeList
          articles={articles}
          onAdd={onAdd}
          onRest={onRest}
          onDelete={onDeleteArticle}
        />
        <TotalCostTable cells={cells} />
        <ConfirmPanel onConfirm={onConfirm} />
      </Fragment>
    );
  }
}

export default Checkout;
