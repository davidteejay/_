import React, { useEffect } from 'react';
import { View } from 'react-native';

const Launch = ({ navigation }) => {
  useEffect(() => {
    navigation.navigate('Auth')
  }, []);

  return <View style={{ flex: 1, backgroundColor: '#fff' }} />;
};

export default Launch;
