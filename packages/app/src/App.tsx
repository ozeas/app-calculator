import React from 'react';

import { Theme } from '@ac/components';

import CalculatorPage from './apps/calculator/pages/calculator-page';

console.log(Theme);

const App: React.FC = () => (
  <Theme>
    <CalculatorPage />
  </Theme>
);

export default App;
