import { Elements } from '@stripe/react-stripe-js';
import { StrictMode } from 'react';
import { AppProvider } from './hooks';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/globalStyles';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import { standardTheme } from './styles/themes/standard';
import { Router } from './routes';
import stripePromise from './config/stripeConfig';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={standardTheme}>
    <AppProvider>
      <Elements stripe={stripePromise}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      </Elements>
      <GlobalStyles />
      <ToastContainer autoClose={2000} theme="colored" />
    </AppProvider>
    </ThemeProvider>
  </StrictMode>,
);
