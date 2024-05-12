import React, {useState} from 'react';
import {View, ScrollView, KeyboardAvoidingView, Alert} from 'react-native';
import Mybutton from './MyButton';
import Mytextinput from './MytextInput';
import firestore from '@react-native-firebase/firestore';

const SignUp = props => {
  let [userName, setUserName]       = useState('');
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
                onPress: () => props.navigation.navigate('Login'),
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
                onPress: () => props.navigation.navigate('Login'),
              },
            ],
            {cancelable: false},
          );
        });
    } else {
      Alert.alert('Please fill all the details');
    }
  };

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        paddingHorizontal: 35,
      }}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView
          behavior="padding"
          style={{flex: 1, justifyContent: 'space-between'}}>
          <Mytextinput
            placeholder="Enter Name"
            onChangeText={userName => setUserName(userName)}
            style={{padding: 10}}
          />
          <Mytextinput
            placeholder="Enter Contact No"
            onChangeText={userContact => setUserContact(userContact)}
            maxLength={10}
            keyboardType="numeric"
            style={{padding: 10}}
          />
          <Mytextinput
            placeholder="Enter Address"
            onChangeText={userAddress => setUserAddress(userAddress)}
            maxLength={225}
            numberOfLines={5}
            multiline={true}
            style={{textAlignVertical: 'top', padding: 10}}
          />
          <Mybutton title="Submit" customClick={handleRegistration} />
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default SignUp;
