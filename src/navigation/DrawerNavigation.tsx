import React, { FC } from 'react';
import { Button, Text, View } from 'react-native';

// Package
import { createDrawerNavigator } from '@react-navigation/drawer';

// Components
import DrawerContent from './DrawerContent';
import MyComponent from '../MyComponent';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pantalla actual: Home</Text>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pantalla actual: Notifications</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

const DrawerNavigation: FC = props => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={() => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      <Drawer.Screen name="MyComponent" component={MyComponent} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
