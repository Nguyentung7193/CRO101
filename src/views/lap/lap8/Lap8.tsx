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

type MonHoc = {
  id: string;
  maMH: string;
  lop: string;
  name: string;
  khoa: string;
};

const Lap8 = () => {
  const [data, setData] = useState<MonHoc[]>([]);
  const [maMH, setMaMH] = useState<string>('');
  const [lop, setLop] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [khoa, setKhoa] = useState<string>('');

  const [maMHUpdate, setMaMHUpdate] = useState<string>('');
  const [lopUpdate, setLopUpdate] = useState<string>('');
  const [nameUpdate, setNameUpdate] = useState<string>('');
  const [khoaUpdate, setKhoaUpdate] = useState<string>('');
  const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);
  const [selectedMonHoc, setSelectedMonHoc] = useState<MonHoc | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/monhoc');
      setData(response.data);
      console.log('Data fetched successfully:', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const deleteItem = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3000/monhoc/${id}`);
      Alert.alert('Xóa môn học thành công');
      await fetchData();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const validateInput = (
    maMH: string,
    lop: string,
    name: string,
    khoa: string,
  ): string | null => {
    if (!maMH.trim()) {
      return 'Mã môn học không được để trống';
    }
    if (!lop.trim()) {
      return 'Lớp không được để trống';
    }
    if (!name.trim()) {
      return 'Tên môn học không được để trống';
    }
    if (!khoa.trim()) {
      return 'Khoa không được để trống';
    }
    return null;
  };

  const addItem = async () => {
    try {
      const validationError = validateInput(maMH, lop, name, khoa);
      if (validationError) {
        Alert.alert('Lỗi', validationError);
        return;
      }
      const exists = data.some(item => item.maMH === maMH);
      if (exists) {
        Alert.alert('Lỗi', 'Mã môn học này đã tồn tại');
        return;
      }
      await axios.post('http://localhost:3000/monhoc', {
        maMH,
        lop,
        name,
        khoa,
      });
      Alert.alert('Thành công', 'Thêm môn học thành công');
      setMaMH('');
      setLop('');
      setName('');
      setKhoa('');
      await fetchData();
    } catch (error) {
      console.error('Error adding item:', error);
      Alert.alert('Lỗi', 'Không thể thêm môn học');
    }
  };

  const handleUpdatePress = async (item: MonHoc) => {
    setSelectedMonHoc(item);
    setMaMHUpdate(item.maMH);
    setLopUpdate(item.lop);
    setNameUpdate(item.name);
    setKhoaUpdate(item.khoa);
    setIsUpdateModalVisible(true);
  };

  const updateItem = async () => {
    if (!selectedMonHoc) return;

    try {
      const validationError = validateInput(
        maMHUpdate,
        lopUpdate,
        nameUpdate,
        khoaUpdate,
      );
      if (validationError) {
        Alert.alert('Lỗi', validationError);
        return;
      }
      const exists = data.some(
        item => item.maMH === maMHUpdate && item.id !== selectedMonHoc.id,
      );
      if (exists) {
        Alert.alert('Lỗi', 'Mã môn học này đã tồn tại');
        return;
      }

      const updatedMonHoc = {
        id: selectedMonHoc.id,
        maMH: maMHUpdate,
        lop: lopUpdate,
        name: nameUpdate,
        khoa: khoaUpdate,
      };

      await axios.put(
        `http://localhost:3000/monhoc/${selectedMonHoc.id}`,
        updatedMonHoc,
      );

      Alert.alert('Thành công', 'Cập nhật môn học thành công');
      setIsUpdateModalVisible(false);
      setSelectedMonHoc(null);
      setMaMHUpdate('');
      setLopUpdate('');
      setNameUpdate('');
      setKhoaUpdate('');
      await fetchData();
    } catch (error) {
      console.error('Error updating item:', error);
      Alert.alert('Lỗi', 'Không thể cập nhật môn học');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({item}: {item: MonHoc}) => (
    <View style={{padding: 10, borderBottomWidth: 1, borderColor: '#ccc'}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'column', flex: 1}}>
          <Text style={{fontSize: 18}}>Mã MH: {item.maMH}</Text>
          <Text style={{color: 'gray'}}>Tên: {item.name}</Text>
          <Text style={{color: 'gray'}}>Lớp: {item.lop}</Text>
          <Text style={{color: 'gray'}}>Khoa: {item.khoa}</Text>
        </View>
        <View>
          <Button title="Xóa" onPress={() => deleteItem(item.id)} />
          <Button title="Sửa" onPress={() => handleUpdatePress(item)} />
        </View>
      </View>
    </View>
  );

  return (
    <View style={{flex: 1, padding: 10}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>
        Quản lý môn học
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Mã môn học"
          value={maMH}
          onChangeText={setMaMH}
          style={styles.input}
        />
        <TextInput
          placeholder="Lớp"
          value={lop}
          onChangeText={setLop}
          style={styles.input}
        />
        <TextInput
          placeholder="Tên môn học"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput
          placeholder="Khoa"
          value={khoa}
          onChangeText={setKhoa}
          style={styles.input}
        />
        <Button title="Thêm môn học" onPress={addItem} />
      </View>

      <FlatList
        data={data}
        keyExtractor={item => item.maMH}
        renderItem={renderItem}
      />

      <Modal
        visible={isUpdateModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setIsUpdateModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Cập nhật môn học</Text>
            <TextInput
              placeholder="Mã môn học"
              value={maMHUpdate}
              onChangeText={setMaMHUpdate}
              style={styles.input}
            />
            <TextInput
              placeholder="Lớp"
              value={lopUpdate}
              onChangeText={setLopUpdate}
              style={styles.input}
            />
            <TextInput
              placeholder="Tên môn học"
              value={nameUpdate}
              onChangeText={setNameUpdate}
              style={styles.input}
            />
            <TextInput
              placeholder="Khoa"
              value={khoaUpdate}
              onChangeText={setKhoaUpdate}
              style={styles.input}
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Button title="Cập nhật" onPress={updateItem} />
              <Button
                title="Hủy"
                onPress={() => setIsUpdateModalVisible(false)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    elevation: 2,
  },
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

export default Lap8;
