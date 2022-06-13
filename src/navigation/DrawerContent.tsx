import React from 'react';

// Package
import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

const DrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate('Home')}
      />
      <DrawerItem
        label="Notifications"
        onPress={() => props.navigation.navigate('Notifications')}
      />
      <DrawerItem
        label="My Component"
        onPress={() => props.navigation.navigate('MyComponent')}
      />
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
