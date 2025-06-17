import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import DrawerNavigator from './src/navigation/DrawerNavigator';
import RootNavigator from './src/navigation/RootNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <DrawerNavigator /> */}
      <RootNavigator/>
    </NavigationContainer>
  );
};

export default App;
