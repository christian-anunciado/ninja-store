import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import CurrencyProvider from './context/currencyContext';
import ToastWrapper from './components/ToastWrapper/ToastWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <PersistGate loading={"Loading"} persistor={persistor}>
        <CurrencyProvider>
          <App />
          <ToastWrapper />
        </CurrencyProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
