import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import axios from 'axios';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';

type Props = StackScreenProps<RootStackParamList, 'AddShoe'>;

const AddShoeScreen = ({navigation}: Props) => {
  const [shoe, setShoe] = useState({
    ten: '',
    hang: '',
    size: '',
    gia: '',
    anh: '',
    trangthai: 'con hang',
  });

  const handleSubmit = async () => {
    if (!shoe.ten || !shoe.hang || !shoe.size || !shoe.gia || !shoe.anh) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    try {
      await axios.post('http://localhost:3000/shoe', {
        ...shoe,
        size: parseInt(shoe.size),
        gia: parseInt(shoe.gia),
      });
      Alert.alert('Success', 'Shoe added successfully', [
        {text: 'OK', onPress: () => navigation.goBack()},
      ]);
    } catch (error) {
      console.error('Error adding shoe:', error);
      Alert.alert('Error', 'Failed to add shoe');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={shoe.ten}
        onChangeText={text => setShoe({...shoe, ten: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Brand"
        value={shoe.hang}
        onChangeText={text => setShoe({...shoe, hang: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Size"
        value={shoe.size}
        onChangeText={text => setShoe({...shoe, size: text})}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={shoe.gia}
        onChangeText={text => setShoe({...shoe, gia: text})}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={shoe.anh}
        onChangeText={text => setShoe({...shoe, anh: text})}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Add Shoe</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
    marginTop: 50, // Adjust for status bar
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    marginBottom: 16,
    borderRadius: 8,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#2196F3',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddShoeScreen;