// src/config/reactotron.ts
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

declare global {
  interface Console {
    tron: typeof Reactotron;
  }
}

const reactotron = Reactotron
  .configure({
    name: 'MyApp',
    host: '192.168.1.10', // thay bằng IP máy tính bạn
  })
  .useReactNative()
  .use(reactotronRedux())
  .connect();

if (__DEV__) {
  console.tron = reactotron;
}

export default reactotron;
