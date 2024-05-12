import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ViewData from '../adminoperations/ViewData';
import Config from '../Config';

const Stack = createStackNavigator();

const UserNavigator = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ViewData"
        component={ViewData}
        options={{
          title: 'View Data',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Config.themeColor,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Reset')}>
              <Icon
                name="arrow-back"
                size={24}
                color="white"
                style={{marginLeft: 15}}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default UserNavigator;
