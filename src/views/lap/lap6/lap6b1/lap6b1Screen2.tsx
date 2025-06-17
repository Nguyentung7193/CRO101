import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import type {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../../../types/navigation';

type Props = StackScreenProps<RootStackParamList, 'Lap6b1Screen2'>;

function Lap6b1Screen2({route, navigation}: Props) {
  const {message} = route.params;

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleReset = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Lap6b1Screen1'}],
    });
  };

  const handlePop = () => {
    navigation.pop();
  };

  const handlePopToTop = () => {
    navigation.popToTop();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nội dung đã nhập:</Text>
      <Text style={styles.message}>{message}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleGoBack}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleReset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handlePop}>
          <Text style={styles.buttonText}>Pop</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handlePopToTop}>
          <Text style={styles.buttonText}>Pop To Top</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: '#333',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    gap: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Lap6b1Screen2;
