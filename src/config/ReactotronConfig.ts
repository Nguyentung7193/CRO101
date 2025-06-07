// ReactotronConfig.js
import Reactotron from 'reactotron-react-native';

Reactotron
  .configure({ name: 'My CLI App' }) // tên hiển thị trên Reactotron
  .useReactNative()
  .connect(); // kết nối tới Reactotron desktop

if (__DEV__) {
  console.tron = Reactotron; // gán global để tiện log
}
