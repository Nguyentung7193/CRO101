/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({navigation}: Props) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <Image
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        style={{width: 100, height: 100}}
      />
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate('Detail', {id: 123})}
      />
    </View>
  );
};

export default HomeScreen;
