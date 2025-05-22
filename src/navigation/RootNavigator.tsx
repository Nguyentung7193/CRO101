import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../views/HomeScreen';
import DetailScreen from '../views/DetailScreen';
import { RootStackParamList } from '../types/navigation';
import DemoScreen from '../views/demo/DemoScreen';
import PressableCompoment from '../views/demo/PressableCompoment';
import lap3b1 from '../views/lap/lap3/lap3';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Lap3b1">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Demo" component={DemoScreen} />
      <Stack.Screen name="Pressable" component={PressableCompoment} />
      <Stack.Screen name="Lap3b1" component={lap3b1} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
