import React from 'react';

// Package
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { TailwindProvider } from 'tailwind-rn';

// Components
import MyComponent from './src/MyComponent';

// Utils
import utilities from './tailwind.json';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={MyComponent} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
};

export default App;
