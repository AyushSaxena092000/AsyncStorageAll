import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

let contacts = [];
const AddContact = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const navigation = useNavigation();
  const saveContact = async () => {
    let tempContact = [];
    contacts = [];
    let x = JSON.parse(await AsyncStorage.getItem('CONTACTS'));
    tempContact = x;
    tempContact.map(item => {
      contacts.push(item);
    });
    contacts.push({name: name, mobile: mobile});
    console.log(contacts);
    await AsyncStorage.setItem('CONTACTS', JSON.stringify(contacts));
    navigation.goBack();
  };
  return (
    <View style={{flex: 1}}>
      <TextInput
        placeholder="Enter Name"
        value={name}
        onChangeText={txt => setName(txt)}
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
        placeholder="Enter Mobile"
        value={mobile}
        keyboardType="number-pad"
        onChangeText={txt => setMobile(txt)}
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
          saveContact();
        }}>
        <Text style={{color: '#fff', fontWeight: '600'}}>Save Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddContact;
