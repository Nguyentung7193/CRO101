/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Image
          source={{
            uri: 'https://your-profile-image-url.com',
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Nguyen Van A</Text>
        <Text style={styles.email}>example@email.com</Text>
      </View>

      <View style={styles.drawerContent}>
        <DrawerItem
          label="Lap5b1"
          icon={({color, size}) => (
            <Icon name="create-outline" size={size} color={color} />
          )}
          onPress={() => props.navigation.navigate('Lap6b1Screen1')}
        />
        <DrawerItem
          label="Lap5b2"
          icon={({color, size}) => (
            <Icon name="eye-outline" size={size} color={color} />
          )}
          onPress={() => props.navigation.navigate('lap5b2')}
        />
        <DrawerItem
          label="Lap5b3"
          icon={({color, size}) => (
            <Icon name="eye-outline" size={size} color={color} />
          )}
          onPress={() => props.navigation.navigate('lap5b3')}
        />
        <DrawerItem
            label={"Lap6b1Screen1"}
            icon={({color, size}) => (
              <Icon name="navigate-outline" size={size} color={color} />
            )}
            onPress={() => props.navigation.navigate('Lap6b1Screen1')}
        />
        <DrawerItem
          label="Lap6b1Screen2"
          icon={({color, size}) => (
            <Icon name="navigate-outline" size={size} color={color} />
          )}
          onPress={() => props.navigation.navigate('Lap6b1Screen2')}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    padding: 20,
    backgroundColor: '#f6f6f6',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  drawerContent: {
    flex: 1,
    paddingTop: 10,
  },
});

export default CustomDrawer;
