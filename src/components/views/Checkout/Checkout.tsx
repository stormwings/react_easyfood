import React, { Component, Fragment } from 'react';

import TitlePanel from '../../smart/TitlePanel/TitlePanel';
import DescriptionTable from '../../smart/DescriptionTable/DescriptionTable';
import PaymentPanel from '../../smart/PaymentPanel/PaymentPanel';
import ArticleResumeList from '../../smart/ArticleResumeList/ArticleResumeList';
import PricesTable from '../../smart/PricesTable/PricesTable';
import ConfirmPanel from '../../smart/ConfirmPanel/ConfirmPanel';

class Checkout extends Component {
  render() {
    return (
      <Fragment>
        <TitlePanel />
        <DescriptionTable />
        <PaymentPanel />
        <ArticleResumeList />
        <PricesTable />
        <ConfirmPanel />
      </Fragment>
    );
  }
}

export default Checkout;
