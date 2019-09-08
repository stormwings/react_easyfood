import React, { Component, Fragment } from 'react';

import TitlePanel from '../../smart/TitlePanel/TitlePanel';
import DescriptionTable from '../../smart/DescriptionTable/DescriptionTable';
import PaymentPanel from '../../smart/PaymentPanel/PaymentPanel';
import ArticleResumeList from '../../smart/ArticleResumeList/ArticleResumeList';
import TotalCostTable from './../../smart/TotalCostTable/TotalCostTable';
import ConfirmPanel from '../../smart/ConfirmPanel/ConfirmPanel';

const articles: any = [
  {
    _id: 1,
    title: 'Meat menu',
    price: '8U$D',
    image: 'https://image.flaticon.com/icons/svg/1890/1890012.svg',
    delivery: '0.5U$D - 30m'
  },
  {
    _id: 2,
    title: 'Burger XXL',
    price: '3U$D',
    image: 'https://image.flaticon.com/icons/svg/1365/1365540.svg',
    delivery: '0.5U$D - 15m'
  },
  {
    _id: 3,
    title: 'Pizza M',
    price: '4U$D',
    image: 'https://image.flaticon.com/icons/svg/135/135646.svg',
    delivery: 'FREE - 30m'
  }
];

class Checkout extends Component {
  render() {
    return (
      <Fragment>
        <TitlePanel title={'Checkout'} />
        <DescriptionTable />
        <PaymentPanel />
        <ArticleResumeList articles={articles} />
        <TotalCostTable />
        <ConfirmPanel />
      </Fragment>
    );
  }
}

export default Checkout;
