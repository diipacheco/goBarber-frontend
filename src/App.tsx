import React, { ReactElement } from 'react';

import GlobalStyle from './styles/global';

const App: React.FC = (): ReactElement<Element> => (
  <>
    <h1>Hello World</h1>
    <GlobalStyle />
  </>
);

export default App;
