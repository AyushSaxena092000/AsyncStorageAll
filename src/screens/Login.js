import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useNavigation, useIsFocused} from '@react-navigation/native';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const saveEmailPass = async () => {
    try {
      await AsyncStorage.setItem('EMAIl', email);
      await AsyncStorage.setItem('PASSWORD', password);
      navigation.navigate('Contact');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 20,
          marginTop: 100,
          fontWeight: '600',
        }}>
        Login
      </Text>
      <TextInput
        placeholder="Enter Email Id"
        value={email}
        onChangeText={txt => setEmail(txt)}
        style={{
          width: '90%',
          height: 50,
          borderWidth: 2,
          alignSelf: 'center',
          marginTop: 50,
          borderRadius: 10,
          paddingLeft: 20,
        }}
      />
      <TextInput
        placeholder="Enter Password"
        value={password}
        onChangeText={txt => setPassword(txt)}
        style={{
          width: '90%',
          height: 50,
          borderWidth: 2,
          alignSelf: 'center',
          marginTop: 50,
          borderRadius: 10,
          paddingLeft: 20,
        }}
      />

      <TouchableOpacity
        style={{
          backgroundColor: '#000',
          height: 50,
          borderRadius: 20,
          alignSelf: 'center',
          width: '90%',
          marginTop: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          saveEmailPass();
        }}>
        <Text style={{color: '#fff', fontWeight: '600'}}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
