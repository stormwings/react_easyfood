import React from 'react';
import './App.scss';
import './i18n';
import Router from './routes/Router';

// import { useTranslation } from 'react-i18next';

const App: React.FC = () => {
  // const { t } = useTranslation();

  return (
    <div className="App">
      {/* <div>[[{t('title')}]]</div>
      <div>--{t('Welcome to React')}--</div> */}
      <Router />
    </div>
  );
};

export default App;
