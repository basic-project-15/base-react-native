import 'react-native-gesture-handler';
import React from 'react';

// Package
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { TailwindProvider } from 'tailwind-rn';

// Components
import MyComponent from './src/MyComponent';
import DrawerNavigation from './src/navigation/DrawerNavigation';

// Utils
import utilities from './tailwind.json';

const Stack = createNativeStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

const App = () => {
  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Dashboard"
            component={DrawerNavigation}
            options={navOptionHandler}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
};

export default App;
