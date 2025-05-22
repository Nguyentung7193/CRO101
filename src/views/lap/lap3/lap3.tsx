/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {
  Alert,
  BackHandler,
  Button,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function lap3() {
  const [name, setname] = useState('');
  const [phone, setphone] = useState('');
  const [password, setpassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const backAction = () => {
      if (modalVisible) {
        setModalVisible(false);
        Alert.alert('Thông báo', 'Bạn đã tắt modal bằng nút back của thiết bị');
        return true;
      }
      return false;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [modalVisible]);

  return (
    <View style={{flex: 1}}>
      <TextInput
        value={name}
        onChangeText={setname}
        placeholder="Nhập tên"
        style={styles.tipStyle}
      />
      <TextInput
        value={phone}
        onChangeText={setphone}
        placeholder="Nhập phone"
        style={styles.tipStyle}
      />
      <TextInput
        value={password}
        onChangeText={setpassword}
        placeholder="Nhập password"
        style={styles.tipStyle}
      />
      <View style={{marginTop: 20, alignItems: 'center'}}>
        <Button title="Mở Modal" onPress={() => setModalVisible(true)} />
      </View>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setModalVisible(false);
          Alert.alert(
            'Thông báo',
            'Bạn đã tắt modal bằng nút back của thiết bị',
          );
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={{fontSize: 18, marginBottom: 10}}>Đây là Modal</Text>
            <Image
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
              style={{width: 100, height: 100, marginBottom: 15}}
            />
            <Button title="Đóng Modal" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>

      {/* Nội dung thơ */}
      <View style={styles.container}>
        <Text style={styles.baseText}>
          Em vào đời bằng{' '}
          <Text style={[styles.boldText, {color: 'red'}]}>vang đỏ</Text>
          anh vào đời bằng{' '}
          <Text style={[styles.italicText, {color: 'yellow'}]}>nước trà</Text>
        </Text>
        <Text style={styles.baseText}>
          Bằng cơn mưa thơm{' '}
          <Text style={[styles.boldText, {fontSize: 20}, styles.italicText]}>
            mùi đất
          </Text>
          và{' '}
          <Text style={[{fontSize: 10}, styles.italicText]}>
            bằng hoa dại mọc trước nhà
          </Text>
        </Text>

        <Text style={[styles.baseText, styles.boldText, styles.italicText]}>
          em vào đời bằng kế hoạch anh vào đời bằng mộng mơ
        </Text>

        <Text style={styles.baseText}>
          Lý trí em là{' '}
          <Text
            style={{
              textDecorationLine: 'underline',
              letterSpacing: 20,
              fontWeight: 'bold',
            }}>
            {' '}
            công cụ{' '}
          </Text>
          còn trái tim anh là{' '}
          <Text
            style={{
              textDecorationLine: 'underline',
              letterSpacing: 20,
              fontWeight: 'bold',
            }}>
            {' '}
            động cơ{' '}
          </Text>
        </Text>

        <Text style={[styles.baseText, {textAlign: 'right'}]}>
          Em vào đời nhiều đồng nghiệm , anh vào đời nhiều chân tình
        </Text>

        <Text
          style={[
            styles.baseText,
            {textAlign: 'center', fontWeight: 'bold', color: 'orange'},
          ]}>
          Anh chỉ muốn mình đạp đất không muốn đạp ai dưới chân mình
        </Text>

        <Text style={[styles.baseText, {fontWeight: 'bold', color: 'black'}]}>
          Em vào đời bằng
          <Text style={[{color: 'white'}]}>mây trắng</Text>
          em vào đời bằng
          <Text style={[{color: 'yellow'}]}>nắng xanh</Text>
        </Text>

        <Text style={[{fontWeight: 'bold', color: 'black'}]}>
          em vào đời bằng
          <Text style={[{color: 'yellow'}]}>đại lộ</Text>
          và con đường đó giờ
          <Text style={[{color: 'white'}]}>vắng anh</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    padding: 15,
  },
  baseText: {
    fontFamily: 'Cochin',
    color: 'white',
    fontSize: 16,
    marginTop: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  italicText: {
    fontStyle: 'italic',
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
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
});
