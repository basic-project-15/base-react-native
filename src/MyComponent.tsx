import React, { FC } from 'react';
import { SafeAreaView, View, Text } from 'react-native';

// Package
import { useTailwind } from 'tailwind-rn';

// Styles
import globalStyles from './styles/globalStyles';

const MyComponent: FC = () => {
  const tailwind = useTailwind();

  return (
    <SafeAreaView style={tailwind('h-full')}>
      <View style={tailwind('pt-12 items-center')}>
        <View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
          <Text style={[tailwind('text-blue-800 font-semibold'), globalStyles.font20]}>
            Hello Tailwind
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyComponent;
