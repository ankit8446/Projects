// #2 Integration of Firebase Cloud Firestore Database
// https://aboutreact.com/react-native-firebase-cloud-firestore-db

import React, {useState} from 'react';
import {
  View,
  Alert,
  TouchableOpacity,
  Text,
} from 'react-native';
import Mytextinput from '../screen/MytextInput';
import firestore from '@react-native-firebase/firestore';
import Config from '../Config';

const Add = props => {
  let [userName, setUserName] = useState('');
  let [userContact, setUserContact] = useState('');
  let [userAddress, setUserAddress] = useState('');

  handleRegistration = () => {
    if (userName && userContact && userAddress) {
      firestore()
        .collection('Users')
        .add({
          name: userName,
          contact: userContact,
          address: userAddress,
        })
        .then(() => {
          Alert.alert(
            'Success',
            'You are Registered Successfully',
            [
              {
                text: 'Ok',
                onPress: () => props.navigation.navigate('HomeScreen'),
              },
            ],
            {cancelable: false},
          );
        })
        .catch(error => {
          Alert.alert(
            'Exception',
            error,
            [
              {
                text: 'Ok',
                onPress: () => props.navigation.navigate('HomeScreen'),
              },
            ],
            {cancelable: false},
          );
        });
    } else {
      alert('Please fill all the details');
    }
  };

  return (
    <View style={{flex:1,}}>
      <Mytextinput
        placeholder="Enter Name"
        onChangeText={userName => setUserName(userName)}
        style={{padding: 10,backgroundColor:'#dadada'}}
      />
      <Mytextinput
        placeholder="Enter Contact No"
        onChangeText={userContact => setUserContact(userContact)}
        maxLength={10}
        keyboardType="numeric"
        style={{padding: 10,backgroundColor:'#dadada'}}
      />
      <Mytextinput
        placeholder="Enter Address"
        onChangeText={userAddress => setUserAddress(userAddress)}
        maxLength={225}
        numberOfLines={5}
        multiline={true}
        style={{textAlignVertical: 'top', padding: 10,backgroundColor:'#dadada'}}
      />

      <View style={{width: '100%', alignItems: 'center', marginTop: 20}}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00c851',
            borderRadius: 5,
            width: '35%',
            shadowColor: 'black',
            height: 40,
            borderRadius: 20,
          }}
          onPress={handleRegistration}>
          <Text style={{color: '#FFF', fontSize: 18}}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Add;
