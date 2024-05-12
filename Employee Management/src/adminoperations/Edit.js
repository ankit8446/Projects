import React, {useState} from 'react';
import {
  View,
  Alert,
  TouchableOpacity,
  Text,
} from 'react-native';
import Mytextinput from '../screen/MytextInput';
import Mybutton    from '../screen/MyButton';
import firestore from '@react-native-firebase/firestore';
import Config from '../Config';

const Edit = (props) => {
  let [userId, setUserId] = useState('');
  let [userName, setUserName] = useState('');
  let [userContact, setUserContact] = useState('');
  let [userAddress, setUserAddress] = useState('');

  const searchUser = () => {
    if (userId) {
      firestore()
        .collection('Users')
        .doc(userId)
        .get()
        .then((documentSnapshot) => {
          if (documentSnapshot.exists) {
            setUserName(documentSnapshot.data().name);
            setUserContact(documentSnapshot.data().contact);
            setUserAddress(documentSnapshot.data().address);
          } else {
            setUserName('');
            setUserContact('');
            setUserAddress('');
          }
        });
    }
  };

  const updateUser = () => {
    if (userId && userName && userContact && userAddress) {
    
      firestore()
        .collection('Users')
        .doc(userId)
        .update({
          name: userName,
          contact: userContact,
          address: userAddress
        })
        .then(() => {
          Alert.alert(
            'Success',
            'Updated Successfully',
            [
              {
                text: 'Ok',
                onPress:
                  () => props.navigation.navigate('HomeScreen')
              },
            ],
            {cancelable: false},
          );
        })
        .catch((error) => {
          Alert.alert(
            'Exception',
            error,
            [
              {
                text: 'Ok',
                onPress:
                  () => props.navigation.navigate('HomeScreen'),
              },
            ],
            {cancelable: false},
          );
        });
    } else {
      alert('Please fill all fields');
    }
  };

  return (
       <View style={{flex:1}}>
          <Mytextinput
            placeholder="Enter User Id"
            style={{padding: 10,backgroundColor:'#dadada'}}
            value={userId}
            onChangeText={(userId) => setUserId(userId)}
          />

          <View style={{width: '100%', alignItems: 'center', marginTop: 20}}>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#33b5e5',
                borderRadius: 5,
                width: '35%',
                shadowColor: 'black',
                height: 40,
                borderRadius: 20,
              }}
              onPress={searchUser}>
              <Text style={{color: '#FFF', fontSize: 18}}>Search</Text>
            </TouchableOpacity>
          </View>
          <Mytextinput
            placeholder="Enter Name"
            value={userName}
            style={{padding: 10,backgroundColor:'#dadada'}}
            onChangeText={
              (userName) => setUserName(userName)
            }
          />
          <Mytextinput
            placeholder="Enter Contact No"
            value={'' + userContact}
            onChangeText={
              (userContact) => setUserContact(userContact)
            }
            maxLength={10}
            style={{padding: 10,backgroundColor:'#dadada'}}
            keyboardType="numeric"
          />
          <Mytextinput
            value={userAddress}
            placeholder="Enter Address"
            onChangeText={
              (userAddress) => setUserAddress(userAddress)
            }
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
              onPress={updateUser}>
              <Text style={{color: '#FFF', fontSize: 18}}>Submit</Text>
            </TouchableOpacity>
          </View>
      
    </View>
  );
};

export default Edit;