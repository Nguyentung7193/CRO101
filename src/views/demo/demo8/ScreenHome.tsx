/* eslint-disable react-native/no-inline-styles */
import {
  Alert,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

type Product = {
  id: number;
  name: string;
  price: number;
};

const ScreenHome = () => {
  const [data, setData] = useState<Product[]>([]);
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [nameUpdate, setNameUpdate] = useState<string>('');
  const [priceUpdate, setPriceUpdate] = useState<number>(0);
  const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/product');
      setData(response.data);
      console.log('Data fetched successfully:', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const deleteItem = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/product/${id}`);
      Alert.alert('Item deleted successfully');
      await fetchData();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };
  const addItem = async () => {
    try {
      await axios.post('http://localhost:3000/product', {name, price});
      Alert.alert('Item added successfully');
      setName('');
      setPrice(0);
      await fetchData();
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };
  const handleUpdatePress = async (item: Product) => {
    setSelectedProduct(item);
    setNameUpdate(item.name);
    setPriceUpdate(item.price);
    setIsUpdateModalVisible(true);
  };
  const updateItem = async () => {
    if (!selectedProduct) return;

    try {
      const updatedProduct = {
        id: selectedProduct.id,
        name: nameUpdate,
        price: priceUpdate,
      };

      await axios.put(
        `http://localhost:3000/product/${selectedProduct.id}`,
        updatedProduct,
      );

      Alert.alert('Item updated successfully');
      setIsUpdateModalVisible(false);
      setSelectedProduct(null);
      setNameUpdate('');
      setPriceUpdate(0);
      await fetchData();
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const renderItem = ({item}: {item: Product}) => (
    <View style={{padding: 10, borderBottomWidth: 1, borderColor: '#ccc'}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'column'}}>
          <Text style={{fontSize: 18}}>{item.name}</Text>
          <Text style={{color: 'gray'}}>${item.price.toFixed(2)}</Text>
        </View>
        <View>
          <Button title="Delete" onPress={() => deleteItem(item.id)} />
          <Button
            title="Update"
            onPress={() => handleUpdatePress(item)}
          />
        </View>
      </View>
    </View>
  );
  return (
    <View style={{flex: 1, padding: 10}}>
      <Text>ScreenHome</Text>
      <View>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          style={{borderWidth: 1, padding: 10, marginBottom: 10}}
        />
        <TextInput
          placeholder="Price"
          value={price.toString()}
          onChangeText={text => setPrice(Number(text))}
          keyboardType="numeric"
          style={{borderWidth: 1, padding: 10, marginBottom: 10}}
        />
        <Button title="Add Product" onPress={() => addItem()} />
      </View>
      <Text style={{fontSize: 20, marginVertical: 10}}>Product List</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => renderItem({item})}
      />
      <Modal
        visible={isUpdateModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setIsUpdateModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Update Product</Text>
            <TextInput
              placeholder="Name"
              value={nameUpdate}
              onChangeText={setNameUpdate}
              style={styles.input}
            />
            <TextInput
              placeholder="Price"
              value={priceUpdate.toString()}
              onChangeText={text => setPriceUpdate(Number(text))}
              keyboardType="numeric"
              style={styles.input}
            />
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Button title="Update" onPress={updateItem} />
              <Button title="Cancel" onPress={() => setIsUpdateModalVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ScreenHome;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 4,
  },
});
