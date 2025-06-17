import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../types/navigation';

type Props = CompositeScreenProps<
  DrawerScreenProps<RootStackParamList, 'Lap6b1Screen1'>,
  NativeStackScreenProps<RootStackParamList>
>;

const Lap6b1Screen1 = ({navigation}: Props) => {
  const [inputText, setInputText] = useState('');

  const handleNavigate = () => {
    navigation.navigate('Lap6b1Screen2', {
      message: inputText,
    });
  };

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.openDrawer()}>
        <Text style={styles.buttonText}>Menu</Text>
      </TouchableOpacity> */}
      <TextInput
        style={styles.input}
        placeholder="Nhập nội dung"
        value={inputText}
        onChangeText={setInputText}
      />
      <TouchableOpacity style={styles.button} onPress={handleNavigate}>
        <Text style={styles.buttonText}>Chuyển màn hình</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 8,
  },
});

export default Lap6b1Screen1;
