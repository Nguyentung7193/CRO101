import React, {useCallback, useState} from 'react';
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const COLORS = ['red', 'blue'];

export default function Lap4b2() {
  const [refreshing, setRefreshing] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setColorIndex(prev => (prev + 1) % COLORS.length);
      setRefreshing(false);
    }, 1000);
  }, []);

  const STATUS_BAR_COLOR = COLORS[colorIndex];

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: STATUS_BAR_COLOR}]}>
      <StatusBar
        backgroundColor={STATUS_BAR_COLOR}
        barStyle="light-content"
      />

      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#fff"
          />
        }>
        <View style={styles.content}>
          <Text style={[styles.text, {color: STATUS_BAR_COLOR}]}>Kéo xuống để làm mới</Text>
          <Text style={[styles.text, {color: STATUS_BAR_COLOR}]}>StatusBar đổi màu khi refresh</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    width: '100%',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginVertical: 8,
  },
});
