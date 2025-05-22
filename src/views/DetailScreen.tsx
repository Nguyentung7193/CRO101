/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const DetailScreen = ({ route }: Props) => {
  const { id } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Detail Screen - ID: {id}</Text>
    </View>
  );
};

export default DetailScreen;
