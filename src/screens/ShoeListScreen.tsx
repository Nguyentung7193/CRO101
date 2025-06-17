import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';

type Shoe = {
  id: string;
  ten: string;
  hang: string;
  size: number;
  gia: number;
  trangthai: string;
  anh: string;
};
type Props = StackScreenProps<RootStackParamList, 'ShoeList'>;

const ShoeListScreen = ({navigation}: Props) => {
  const [shoes, setShoes] = useState<Shoe[]>([]);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedShoe, setSelectedShoe] = useState<Shoe | null>(null);

  const fetchShoes = async () => {
    try {
      const response = await axios.get('http://localhost:3000/shoe');
      setShoes(response.data);
    } catch (error) {
      console.error('Error fetching shoes:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchShoes();
    });
    return unsubscribe;
  }, [navigation]);

  const handleDelete = async () => {
    if (!selectedShoe) return;
    try {
      await axios.delete(`http://localhost:3000/shoe/${selectedShoe.id}`);
      setDeleteModalVisible(false);
      fetchShoes();
      Alert.alert('Success', 'Shoe deleted successfully');
    } catch (error) {
      console.error('Error deleting shoe:', error);
      Alert.alert('Error', 'Failed to delete shoe');
    }
  };

  const renderItem = ({item}: {item: Shoe}) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('ShoeDetail', {shoe: item})}>
      <Image source={{uri: item.anh}} style={styles.shoeImage} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.ten}</Text>
        <Text style={styles.brand}>Brand: {item.hang}</Text>
        <Text style={styles.price}>Price: ${item.gia}</Text>
        <Text
          style={[
            styles.status,
            {color: item.trangthai === 'con hang' ? 'green' : 'red'},
          ]}>
          {item.trangthai === 'con hang' ? 'In Stock' : 'Out of Stock'}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => {
          setSelectedShoe(item);
          setDeleteModalVisible(true);
        }}>
        <Icon name="trash-outline" size={24} color="red" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddShoe')}>
        <Icon name="add" size={24} color="white" />
        <Text style={styles.addButtonText}>Add New Shoe</Text>
      </TouchableOpacity>

      <FlatList
        data={shoes}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />

      <Modal
        visible={deleteModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setDeleteModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirm Delete</Text>
            <Text style={styles.modalText}>
              Are you sure you want to delete this shoe?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setDeleteModalVisible(false)}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.deleteConfirmButton]}
                onPress={handleDelete}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginTop: 50,
  },
  list: {
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 16,
    flexDirection: 'row',
    padding: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  shoeImage: {
    width: 80,
    height: 80,
    borderRadius: 4,
  },
  cardContent: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  brand: {
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2196F3',
  },
  status: {
    fontSize: 14,
    fontWeight: '500',
  },
  deleteButton: {
    padding: 8,
  },
  addButton: {
    flexDirection: 'row',
    backgroundColor: '#2196F3',
    padding: 16,
    margin: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
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
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  modalButton: {
    padding: 10,
    borderRadius: 4,
    minWidth: 80,
    alignItems: 'center',
    marginLeft: 8,
  },
  cancelButton: {
    backgroundColor: '#999',
  },
  deleteConfirmButton: {
    backgroundColor: '#ff4444',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
});

export default ShoeListScreen;