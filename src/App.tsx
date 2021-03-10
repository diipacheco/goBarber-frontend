import React, { ReactElement } from 'react';

import GlobalStyle from './styles/global';
import Signin from './pages/Signin';

const App: React.FC = (): ReactElement<Element> => (
  <>
    <Signin />
    <GlobalStyle />
  </>
);

export default App;
