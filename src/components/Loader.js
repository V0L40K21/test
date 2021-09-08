import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Loader = () => {
  return (
    <View style={{margin: 15, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size={'large'} color={'#828282'} />
    </View>
  );
};

export default Loader;
