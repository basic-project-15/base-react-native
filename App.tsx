import React from 'react';
import { TailwindProvider } from 'tailwind-rn';
import MyComponent from './src/MyComponent';
import utilities from './tailwind.json';

const App = () => {
  return (
    <TailwindProvider utilities={utilities}>
      <MyComponent />
    </TailwindProvider>
  );
};

export default App;
