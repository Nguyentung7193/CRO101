/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface ProductItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
  onUpdate: (id: string) => void;
  onDelete: (id: string) => void;
}

function ProductItem({ item, onUpdate, onDelete }: ProductItemProps) {
  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price.toLocaleString()} đ</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => onUpdate(item.id)}>
        <Text style={styles.buttonText}>Cập nhật</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#ff4444' }]} onPress={() => onDelete(item.id)}>
        <Text style={styles.buttonText}>Xoá</Text>
      </TouchableOpacity>
    </View>
  );
}

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
    padding: 8,
    backgroundColor: '#007bff',
    borderRadius: 6,
    marginLeft: 8,
  },
  buttonText: {
    color: '#fff',
  },
});

export default ProductItem;