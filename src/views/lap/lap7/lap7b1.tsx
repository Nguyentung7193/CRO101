/* eslint-disable curly */
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

const Tab = createBottomTabNavigator();

const FirstRoute = () => (
  <View style={styles.tabScene}>
    {/* <Text style={styles.tabText}>First Tab Content</Text> */}
    <Icon name="home" size={50} color="#333" />
  </View>
);

const SecondRoute = () => (
  <View style={styles.tabScene}>
    <Text style={styles.tabText}>Second Tab Content</Text>
    <Icon name="person" size={50} color="#333" />
  </View>
);

const ThirdRoute = () => (
  <View style={styles.tabScene}>
    <Text style={styles.tabText}>Third Tab Content</Text>
    <Icon name="settings" size={50} color="#333" />
  </View>
);

// Home Screen with Top Tabs
const HomeScreen = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'First Tab'},
    {key: 'second', title: 'Second Tab'},
    {key: 'third', title: 'Third Tab'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      renderIcon={({route, focused}) => {
        let iconName = '';
        if (route.key === 'first') iconName = 'home';
        else if (route.key === 'second') iconName = 'person';
        else if (route.key === 'third') iconName = 'settings';

        return (
          <View style={styles.tabIconContainer}>
            <Icon
              name={iconName}
              size={24}
              color={focused ? '#FF0000' : '#999999'}
            />
            <Text
              style={focused ? styles.topTabLabel : styles.topTabLabelInactive}>
              {route.title}
            </Text>
          </View>
        );
      }}
      renderLabel={() => null}
      style={styles.topTabBar}
      indicatorStyle={styles.indicator}
      pressColor="transparent"
      pressOpacity={1}
      tabStyle={styles.topTab}
    />
  );

  return (
    <SafeAreaView style={styles.homeContainer}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={renderTabBar}
        style={styles.tabView}
      />
    </SafeAreaView>
  );
};

const ProfileScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Profile Screen</Text>
  </View>
);

const SettingsScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Settings Screen</Text>
  </View>
);

const renderIcon = (focused, iconName) => {
  return (
    <Icon name={iconName} size={24} color={focused ? '#FF0000' : '#FFD700'} />
  );
};

const renderLabel = (focused, label) => {
  if (!focused) return null;
  return <Text style={styles.tabLabel}>{label}</Text>;
};

const Lap7b1 = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => renderIcon(focused, 'home'),
          tabBarLabel: ({focused}) => renderLabel(focused, 'Home'),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => renderIcon(focused, 'person'),
          tabBarLabel: ({focused}) => renderLabel(focused, 'Profile'),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused}) => renderIcon(focused, 'settings'),
          tabBarLabel: ({focused}) => renderLabel(focused, 'Settings'),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  tabView: {
    flex: 1,
  },
  tabIconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  topTabBar: {
    backgroundColor: 'white',
    elevation: 2,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    height: 60,
  },
  topTab: {
    flex: 1,
    padding: 0,
  },
  topTabLabel: {
    fontSize: 12,
    color: '#FF0000',
    marginTop: 4,
  },
  topTabLabelInactive: {
    fontSize: 12,
    color: '#999999',
    marginTop: 4,
  },
  indicator: {
    backgroundColor: '#FF0000',
    height: 3,
  },
  tabScene: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenText: {
    fontSize: 18,
    color: '#333333',
    fontWeight: '500',
  },
  tabText: {
    fontSize: 18,
    color: '#333333',
    fontWeight: '500',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});

export default Lap7b1;
