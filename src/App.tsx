import React, { ReactElement } from 'react';

import AppProvider from './hooks';

import GlobalStyle from './styles/global';

import Signin from './pages/Signin';
import Signup from './pages/Signup';

import ToastContainer from './components/ToastContainer';

const App: React.FC = (): ReactElement<Element> => (
  <>
    <AppProvider>
      <Signin />
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
