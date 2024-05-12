import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './src/redux/authslice';
import Config from './src/Config';
import SplashScreen from './src/screen/SplashScreen';
import AuthNavigator from './src/screen/AuthNavigator';
import AdminNavigator from './src/screen/AdminNavigator';
import UserNavigator from './src/screen/UserNavigator';
import Reset  from './src/screen/Reset';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AuthNavigator"
            component={AuthNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AdminNavigator"
            component={AdminNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="UserNavigator"
            component={UserNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Reset"
            component={Reset}
            options={{
              title: 'Reset',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: Config.themeColor, 
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold', 
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;