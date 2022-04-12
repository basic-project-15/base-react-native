import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import globalStyles from './styles/globalStyles';

const MyComponent = () => {
  const tailwind = useTailwind();

  return (
    <SafeAreaView style={tailwind('h-full')}>
      <View style={tailwind('pt-12 items-center')}>
        <View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
          <Text style={[tailwind('text-blue-800 font-semibold'), globalStyles.font20]}>
            Hello Tailwind, que tal
          </Text>
          <Text style={[tailwind('text-blue-800 font-semibold'), globalStyles.font20]}>
            Prueba 1
          </Text>
          <Text style={[tailwind('text-blue-800 font-semibold'), globalStyles.font20]}>
            Prueba 2
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyComponent;
