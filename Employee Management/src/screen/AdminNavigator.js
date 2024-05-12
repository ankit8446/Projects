import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Config from '../Config';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../adminoperations/HomeScreen';
import Add from '../adminoperations/Add';
import Edit from '../adminoperations/Edit';
import ViewData from '../adminoperations/ViewData';
import DeleteUser from '../adminoperations/DeleteUser';

const Stack = createStackNavigator();

const AdminNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: Config.themeColor,
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Admin Opration',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Reset')}>
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
      <Stack.Screen name="Add" component={Add} options={{title: 'Register'}} />
      <Stack.Screen name="Edit" component={Edit} options={{title: 'Update'}} />
      <Stack.Screen
        name="ViewData"
        component={ViewData}
        options={{title: 'View'}}
      />
      <Stack.Screen
        name="DeleteUser"
        component={DeleteUser}
        options={{title: 'Delete'}}
      />
    </Stack.Navigator>
  );
};

export default AdminNavigator;
