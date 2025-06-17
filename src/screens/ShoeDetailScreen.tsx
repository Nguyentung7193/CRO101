import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {RootStackParamList} from '../types/navigation';
import {StackScreenProps} from '@react-navigation/stack';
import axios from 'axios';

type Props = StackScreenProps<RootStackParamList, 'ShoeDetail'>;

const ShoeDetailScreen = ({route, navigation}: Props) => {
  const {shoe} = route.params;
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedShoe, setEditedShoe] = useState({
    ...shoe,
    size: shoe.size.toString(),
    gia: shoe.gia.toString(),
  });

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/shoe/${shoe.id}`, {
        ...editedShoe,
        size: parseInt(editedShoe.size),
        gia: parseInt(editedShoe.gia),
      });

      if (response.status === 200) {
        Alert.alert('Success', 'Shoe updated successfully', [
          {
            text: 'OK',
            onPress: () => {
              setIsEditMode(false);
              navigation.goBack();
            },
          },
        ]);
      }
    } catch (error) {
      console.error('Error updating shoe:', error);
      Alert.alert('Error', 'Failed to update shoe');
    }
  };

  const renderEditModal = () => (
    <Modal
      visible={isEditMode}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setIsEditMode(false)}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Edit Shoe</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={editedShoe.ten}
            onChangeText={text => setEditedShoe({...editedShoe, ten: text})}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Brand"
            value={editedShoe.hang}
            onChangeText={text => setEditedShoe({...editedShoe, hang: text})}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Size"
            value={editedShoe.size}
            onChangeText={text => setEditedShoe({...editedShoe, size: text})}
            keyboardType="numeric"
          />
          
          <TextInput
            style={styles.input}
            placeholder="Price"
            value={editedShoe.gia}
            onChangeText={text => setEditedShoe({...editedShoe, gia: text})}
            keyboardType="numeric"
          />
          
          <TextInput
            style={styles.input}
            placeholder="Image URL"
            value={editedShoe.anh}
            onChangeText={text => setEditedShoe({...editedShoe, anh: text})}
          />

          <View style={styles.modalButtons}>
            <TouchableOpacity
              style={[styles.modalButton, styles.cancelButton]}
              onPress={() => setIsEditMode(false)}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[styles.modalButton, styles.updateButton]}
              onPress={handleUpdate}>
              <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );

  return (
    <ScrollView style={styles.container}>
      <Image source={{uri: shoe.anh}} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{shoe.ten}</Text>
        <Text style={styles.brand}>Brand: {shoe.hang}</Text>
        <Text style={styles.price}>Price: ${shoe.gia}</Text>
        <Text style={styles.size}>Size: {shoe.size}</Text>
        <Text
          style={[
            styles.status,
            {color: shoe.trangthai === 'con hang' ? 'green' : 'red'},
          ]}>
          {shoe.trangthai === 'con hang' ? 'In Stock' : 'Out of Stock'}
        </Text>

        <TouchableOpacity
          style={styles.editButton}
          onPress={() => setIsEditMode(true)}>
          <Icon name="create-outline" size={24} color="white" />
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      {renderEditModal()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 50, // Adjust for status bar
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  brand: {
    fontSize: 18,
    color: '#666',
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2196F3',
    marginBottom: 8,
  },
  size: {
    fontSize: 18,
    marginBottom: 8,
  },
  status: {
    fontSize: 18,
    fontWeight: '500',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 16,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 8,
    borderRadius: 20,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    width: '90%',
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  modalButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 8,
    alignItems: 'center',
  },
  updateButton: {
    backgroundColor: '#2196F3',
  },
  cancelButton: {
    backgroundColor: '#999',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  editButton: {
    flexDirection: 'row',
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  editButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default ShoeDetailScreen;