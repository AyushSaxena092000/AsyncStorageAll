import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
const Contact = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [contactList, setContactList] = useState();
  useEffect(() => {
    getData();
  }, [isFocused]);
  const getData = async () => {
    const contactsS = await AsyncStorage.getItem('CONTACTS');
    setContactList(JSON.parse(contactsS));
  };
  const deleteContact = async index => {
    const tempData = contactList;
    const selectedData = tempData.filter((item, ind) => {
      return ind != index;
    });
    setContactList(selectedData);
    await AsyncStorage.setItem('CONTACTS', JSON.stringify(selectedData));
  };
  const logout = async () => {
    await AsyncStorage.setItem('EMAIL', '');
    await AsyncStorage.setItem('PASSWORD', '');
    navigation.navigate('Login');
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={contactList}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: '90%',
                height: 50,
                borderWidth: 1,
                alignSelf: 'center',
                borderRadius: 10,
                marginTop: 10,
                borderWidth: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingLeft: 20,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text>{item.name.toUpperCase()}</Text>
                <Text style={{marginLeft: 20}}>{item.mobile}</Text>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: 'red',
                  paddingLeft: 10,
                  paddingRight: 10,
                  height: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  marginRight: 20,
                }}
                onPress={() => {
                  deleteContact(index);
                }}>
                <Text style={{color: '#fff'}}>Delete</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <TouchableOpacity
        style={{
          width: 200,
          height: 50,
          borderRadius: 30,
          backgroundColor: '#000',
          position: 'absolute',
          bottom: 20,
          right: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.navigate('AddContact');
        }}>
        <Text style={{color: '#fff'}}>Add New Contact</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 100,
          height: 50,
          borderRadius: 30,
          backgroundColor: '#000',
          position: 'absolute',
          bottom: 20,
          left: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          logout();
        }}>
        <Text style={{color: '#fff'}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Contact;
