import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Intro = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      checkLogin();
    }, 3000);
  }, []);
  const checkLogin = async () => {
    const email = await AsyncStorage.getItem('EMAIL');
    const pass = await AsyncStorage.getItem('PASSWORD');
    console.log(email);
    if (email !== null) {
      navigation.navigate('Contact');
    } else {
      navigation.navigate('Login');
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20, color: 'red'}}>MyContacts App</Text>
    </View>
  );
};

export default Intro;
