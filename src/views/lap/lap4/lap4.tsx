import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import ContactItem from './compoment/ContactItem';

type Contact = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
};

const contacts: Contact[] = [
  {
    id: '1',
    name: 'Raiden shogun',
    description: 'inazuma',
    imageUrl: 'https://toquoc.mediacdn.vn/280518851207290880/2021/9/3/base64-1630595438805599368242-1630639676186-1630639676357733744119.png',
  },
  {
    id: '2',
    name: 'Raiden',
    description: 'mondstadt',
    imageUrl: 'https://toquoc.mediacdn.vn/280518851207290880/2021/9/3/base64-1630595438805599368242-1630639676186-1630639676357733744119.png',
  },
];

export default function lap4() {
  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ContactItem
            name={item.name}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
     container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});