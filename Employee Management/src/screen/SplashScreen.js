import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {ActivityIndicator,View,Image,Text,SafeAreaView} from 'react-native';
import auth from '@react-native-firebase/auth';

const SplashScreen = ({navigation}) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      navigation.replace(
        auth().currentUser ? 'Reset' : 'AuthNavigator',
      );
    }, 5000);
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <LinearGradient colors={['#FBCD49', '#FFC668']} style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View
            style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Image
              source={require('../Image/employee2.png')}
              style={{width: 300, height: 250}}
            />
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <View style={{marginRight: 10}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 30, color: '#FFF8E6'}}>
                  E<Text style={{color: '#FFF8E6'}}>mployee</Text>
                </Text>
              </View>
              <View>
                <Text
                  style={{fontWeight: 'bold', fontSize: 30, color: '#FFF8E6'}}>
                  M<Text style={{color: '#FFF8E6'}}>anagement</Text>
                </Text>
              </View>
            </View>
            <ActivityIndicator
              animating={animating}
              color="#DFE0DF"
              size="large"
              style={{alignItems: 'center', marginTop: 25}}
            />
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SplashScreen;
