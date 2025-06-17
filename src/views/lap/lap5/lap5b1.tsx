import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const lap5b1 = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>lap5b1</Text>
        <Text style={styles.text1}>This is a text with Savate font.</Text>
        <Text style={styles.text2}>This is a text with Savate-Bold font.</Text>
        <Text style={styles.text3}>This is a text with Savate-Italic font.</Text>
    </View>
  );
};

export default lap5b1;

const styles = StyleSheet.create({
    text1 : {
        fontFamily: 'Savate',
    },
    text2 : {
        fontFamily: 'Savate-Bold',
    },
    text3 : {
        fontFamily: 'Savate-Italic',
    },
});
