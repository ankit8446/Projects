import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Mytextinput from '../screen/MytextInput';

const ViewData = () => {
  let [userId, setUserId] = useState('');
  let [userData, setUserData] = useState({});

  const searchUser = () => {
    if (userId) {
      firestore()
        .collection('Users')
        .doc(userId)
        .get()
        .then(documentSnapshot => {
          let userDetails = {};
          userDetails = documentSnapshot.data();
          console.log(userDetails);
          userDetails['id'] = documentSnapshot.id;
          setUserData(userDetails);
        })
        .catch(error => {
          console.error('Error fetching user:', error);
          setUserData({});
        });
    }
  };

  return (
    <View style={{flex: 1, width: '100%'}}>
      <Mytextinput
        placeholder="Enter User Id"
        onChangeText={userId => setUserId(userId)}
        value={userId}
        style={{padding: 10, backgroundColor: '#dadada'}}
      />
      <View style={{width: '100%', alignItems: 'center', marginTop: 20}}>
        <TouchableOpacity
          onPress={searchUser}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#33b5e5',
            borderRadius: 5,
            width: '35%',
            shadowColor: 'black',
            height: 40,
            borderRadius: 20,
          }}>
          <Text style={{color: '#FFF', fontSize: 18}}>Search User</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 20, width: '90%', marginHorizontal: 20}}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{width: '35%'}}>
            <Text style={{marginLeft: 10}}>User Id </Text>
          </View>
          <View style={{width: '5%'}}>
            <Text>:</Text>
          </View>
          <View style={{width: '60%'}}>
            <Text>{userData ? userData.id : ''}</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{width: '35%'}}>
            <Text style={{marginLeft: 10}}>User Name </Text>
          </View>
          <View style={{width: '5%'}}>
            <Text>:</Text>
          </View>
          <View style={{width: '60%'}}>
            <Text>{userData ? userData.name : ''}</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{width: '35%'}}>
            <Text style={{marginLeft: 10}}>User Contact</Text>
          </View>
          <View style={{width: '5%'}}>
            <Text>:</Text>
          </View>
          <View style={{width: '60%'}}>
            <Text>{userData ? userData.contact : ''}</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{width: '35%'}}>
            <Text style={{marginLeft: 10}}>User Address</Text>
          </View>
          <View style={{width: '5%'}}>
            <Text>:</Text>
          </View>
          <View style={{width: '60%'}}>
            <Text>{userData ? userData.address : ''}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ViewData;
