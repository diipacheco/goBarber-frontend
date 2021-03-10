import React, { ReactElement } from 'react';

import { AuthProvider } from './hooks/AuthContext';

import GlobalStyle from './styles/global';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

const App: React.FC = (): ReactElement<Element> => (
  <>
    <AuthProvider>
      <Signin />
    </AuthProvider>

    <GlobalStyle />
  </>
);

export default App;
