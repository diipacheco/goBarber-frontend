import React, { ReactElement } from 'react';

import GlobalStyle from './styles/global';
// import Signin from './pages/Signin';
import Signup from './pages/Signup';

const App: React.FC = (): ReactElement<Element> => (
  <>
    <Signup />
    <GlobalStyle />
  </>
);

export default App;
