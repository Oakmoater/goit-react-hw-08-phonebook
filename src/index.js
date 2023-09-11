import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { ThemeProvider, StyleSheetManager } from 'styled-components';
import { GlobalStyle } from './components/UI/GlobalStyles';
import { theme } from 'components/UI/Themes/theme';
import isPropValid from '@emotion/is-prop-valid';
import {} from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainerWrapper } from 'components';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <StyleSheetManager shouldForwardProp={isPropValid}>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </StyleSheetManager>
        </BrowserRouter>
      </PersistGate>
    </Provider>
    <ToastContainerWrapper />
  </React.StrictMode>
);
