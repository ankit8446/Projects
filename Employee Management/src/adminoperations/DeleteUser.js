import React, {useState} from 'react';
import {View, Alert,TouchableOpacity,Text} from 'react-native';
import Mytextinput from '../screen/MytextInput';
import firestore from '@react-native-firebase/firestore';


const DeleteUser = (props) => {
  let [userId, setUserId] = useState('');

  const deleteUser = () => {
    if (userId) {
      firestore()
        .collection('Users')
        .doc(userId)
        .delete()
        .then(() => {
          Alert.alert(
            'Success',
            'Deleted Successfully',
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
                  () => props.navigation.navigate('HomeScreen')
              },
            ],
            {cancelable: false},
          );
        });
    } else {
      alert('Please Enter ID');
    }
  };

  return (
    <View
      style={{
           flex: 1,
      
      }}>
      <Mytextinput
        placeholder="Enter User Id"
        onChangeText={(userId) => setUserId(userId)}
        style={{padding: 10,backgroundColor:'#dadada'}}
      />
      <View style={{width: '100%', alignItems: 'center', marginTop: 20}}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#b00c1a',
            borderRadius: 5,
            width: '35%',
            shadowColor: 'black',
            height: 40,
            borderRadius: 20,
          }}
          onPress={deleteUser}>
          <Text style={{color: '#FFF', fontSize: 18}}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeleteUser;