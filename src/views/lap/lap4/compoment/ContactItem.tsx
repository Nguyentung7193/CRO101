import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

type ContactItemProps = {
  name: string;
  description: string;
  imageUrl: string;
};

const ContactItem: React.FC<ContactItemProps> = ({ name, description, imageUrl }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <TouchableOpacity style={styles.callButton}>
        <Text style={styles.callText}>Call</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    color: '#666',
  },
  callButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#007AFF',
    borderRadius: 6,
  },
  callText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
