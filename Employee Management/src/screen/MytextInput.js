import React from 'react';
import {View, TextInput} from 'react-native';

const Mytextinput = (props) => {
  return (
    <View
      style={{
        marginTop: 10,
        borderColor: '#03A89E',
        width: '90%',
        marginHorizontal:20,
        textalign:'center',
        backgroundColor: '#f0f0f0',
        height: 50,
        
      }}>
      <TextInput
        underlineColorAndroid="transparent"
        placeholder={props.placeholder}
        placeholderTextColor="grey"
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        returnKeyType={props.returnKeyType}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
        onSubmitEditing={props.onSubmitEditing}
        style={props.style}
        blurOnSubmit={false}
        value={props.value}
      />
    </View>
  );
};

export default Mytextinput;