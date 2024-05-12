import React from 'react';
import {View} from 'react-native';
import Mybutton from '../screen/MyButton';

const HomeScreen = props => {
  return (
    <View
      style={{
        flex: 1,
        marginTop:50,
        width: '70%',
        marginHorizontal: 60,
      }}>
      <Mybutton
        title="Add"
        customClick={() => props.navigation.navigate('Add')}
      />
      <Mybutton
        title="Edit"
        customClick={() => props.navigation.navigate('Edit')}
      />
      <Mybutton
        title="View"
        customClick={() => props.navigation.navigate('ViewData')}
      />
      <Mybutton
        title="Delete"
        customClick={() => props.navigation.navigate('DeleteUser')}
      />
    </View>
  );
};

export default HomeScreen;
