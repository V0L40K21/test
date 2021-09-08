import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Loader from './Loader';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Loader />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
