/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-native/no-inline-styles */
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';

const lap2 = () => {
  const [name, setname] = useState('');
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/raiden.png')}
        style={{width: 300, height: 300, borderRadius: 150}}
      />
      <Text style={{fontSize: 20, color: 'red', marginTop: 20}}>
        Hello Nguyen Xuan Tung
      </Text>
      <TextInput
        value={name}
        onChangeText={setname}
        placeholder="Nhập name"
        style={styles.tipStyle}
      />
      <Button
        title="Nhấn vào đây"
        onPress={() => {
          setShowModal(true);
        }}
      />
      <Modal
        visible={showModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowModal(false)}>
        <View style={styles.modalWrapper}>
          <View style={styles.modalContent}>
            <Text style={{fontSize: 20, marginBottom: 20}}>
              Xin chào, {name || 'bạn chưa nhập tên!'}
            </Text>
            <Button title="Đóng" onPress={() => setShowModal(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default lap2;

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tipStyle: {
    width: '90%',
    height: 50,
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginHorizontal: 15,
    paddingHorizontal: 10,
  },
  modalWrapper: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
});
