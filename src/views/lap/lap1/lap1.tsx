/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Modal,
  TextInput,
} from 'react-native';
import ProductItem from './compoment/ProductItem';

const initialProducts = [
  {
    id: '1',
    name: 'Sản phẩm 1',
    price: 100000,
    image: 'https://toquoc.mediacdn.vn/280518851207290880/2021/9/3/base64-1630595438805599368242-1630639676186-1630639676357733744119.png',
  },
  {
    id: '2',
    name: 'Sản phẩm 2',
    price: 200000,
    image: 'https://toquoc.mediacdn.vn/280518851207290880/2021/9/3/base64-1630595438805599368242-1630639676186-1630639676357733744119.png',
  },
];

const Lap1 = () => {
  const [products, setProducts] = useState(initialProducts);
  const [modalVisible, setModalVisible] = useState(false);
  const [newName, setNewName] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newImage, setNewImage] = useState('');

  const handleDelete = (id: string) => {
    setProducts(products.filter(item => item.id !== id));
  };

  const handleUpdate = (id: string) => {
    Alert.alert(`Cập nhật sản phẩm ${id}`);
  };

  const handleAdd = () => {
    setModalVisible(true);
  };

  const handleAddProduct = () => {
    if (!newName || !newPrice || !newImage) {
      Alert.alert('Vui lòng nhập đầy đủ thông tin');
      return;
    }
    const newId = (products.length + 1).toString();
    setProducts([
      ...products,
      {
        id: newId,
        name: newName,
        price: parseInt(newPrice, 10),
        image: newImage,
      },
    ]);
    setModalVisible(false);
    setNewName('');
    setNewPrice('');
    setNewImage('');
  };

  const renderItem = ({item}: any) => (
     <ProductItem item={item} onUpdate={handleUpdate} onDelete={handleDelete} />
  );

  return (
    <View style={{flex: 1, padding: 16}}>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListFooterComponent={
          <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
            <Text style={styles.addButtonText}>+ Thêm sản phẩm</Text>
          </TouchableOpacity>
        }
      />
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Thêm sản phẩm mới</Text>
            <TextInput
              style={styles.input}
              placeholder="Tên sản phẩm"
              value={newName}
              onChangeText={setNewName}
            />
            <TextInput
              style={styles.input}
              placeholder="Giá sản phẩm"
              value={newPrice}
              onChangeText={setNewPrice}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Link ảnh"
              value={newImage}
              onChangeText={setNewImage}
            />
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity
                style={[styles.button, {flex: 1, marginRight: 8}]}
                onPress={handleAddProduct}>
                <Text style={styles.buttonText}>Thêm</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, {backgroundColor: '#888', flex: 1, marginLeft: 8}]}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>Huỷ</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginBottom: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    color: '#888',
    marginTop: 4,
  },
  button: {
    padding: 12,
    backgroundColor: '#007bff',
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  addButton: {
    marginTop: 16,
    backgroundColor: '#28a745',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    width: '85%',
    elevation: 6,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
  },
});

export default Lap1;
