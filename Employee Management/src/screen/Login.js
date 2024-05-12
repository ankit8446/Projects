import React, {useState, useEffect, createRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import {
  setUserEmail,
  setUserPassword,
  setLoggedIn,
  setError,
} from '../redux/authslice';
import {useDispatch, useSelector} from 'react-redux';
import Icon8 from 'react-native-vector-icons/SimpleLineIcons';
import Icon9 from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';

const {width} = Dimensions.get('window');

const Login = ({navigation}) => {
  const [errortext, setErrortext] = useState('');
  const [animation, setAnimation] = useState(null);
  const passwordInputRef = createRef();
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);

  useEffect(() => {
    setAnimation('fadeInUp');
  }, []);

  function hadlepasswordvisbility() {
    {
      isPasswordSecure ? setIsPasswordSecure(false) : setIsPasswordSecure(true);
    }
  }

  const dispatch = useDispatch();
  const {userEmail, userPassword, error} = useSelector(state => state.auth);

  const handleEmailChange = email => {
    dispatch(setUserEmail(email));
  };

  const handlePasswordChange = password => {
    dispatch(setUserPassword(password));
  };

  const handleSubmitPress = () => {
    if (!userEmail || !userPassword) {
      setErrortext('Please enter both email and password');
      return;
    }

    auth()
      .signInWithEmailAndPassword(userEmail, userPassword)
      .then(userCredential => {
        const user = userCredential.user;
        console.log(user);
        dispatch(setLoggedIn(true));
        if (user.email.includes('admin')) {
          navigation.replace('AdminNavigator');
        } else {
          navigation.replace('UserNavigator');
        }
      })
      .catch(error => {
        console.log(error);
        if (error.code === 'auth/invalid-email') setErrortext(error.message);
        else if (error.code === 'auth/user-not-found')
          setErrortext('No User Found');
        else {
          setErrortext('Please check your email id or password');
        }
        dispatch(setError(error.message));
      });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <LinearGradient colors={['#FBCD49', '#FFC668']} style={{height: 300}}>
          <View style={styles.slogancontainer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 15,
              }}>
              <View style={{marginRight: 10}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 28, color: '#DFE0DF'}}>
                  E<Text style={{color: '#FFF8E6'}}>mployee</Text>
                </Text>
              </View>
              <View>
                <Text
                  style={{fontWeight: 'bold', fontSize: 28, color: '#DFE0DF'}}>
                  M<Text style={{color: '#FFF8E6'}}>anagement</Text>
                </Text>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../Image/employee3.png')}
                resizeMode="cover"
                style={{height: 120, width: 250, marginTop: 35}}
              />
            </View>
          </View>
        </LinearGradient>
        <View style={styles.cardcontainer}>
          <View style={styles.section2}>
            <View style={styles.formcontainer} animation={animation}>
              <View style={styles.inputcontainer}>
                <View style={styles.innerinputcontianer}>
                  <View style={styles.innericoncontainer}>
                    <View style={styles.innericonouterborderstyles}>
                      <View style={styles.iconborderstyles}>
                        <Icon8 name="user" color={'#A28E65'} size={18} />
                      </View>
                    </View>
                  </View>
                  <View style={styles.innertextinputconatiner}>
                    <TextInput
                      style={styles.inputStyle}
                      onChangeText={handleEmailChange}
                      placeholder="Enter Email"
                      placeholderTextColor="#999"
                      autoCapitalize="none"
                      returnKeyType="next"
                      onSubmitEditing={() =>
                        passwordInputRef.current &&
                        passwordInputRef.current.focus()
                      }
                      underlineColorAndroid="#f000"
                      blurOnSubmit={false}
                    />
                  </View>
                </View>
              </View>

              <View style={styles.inputcontainer}>
                <View style={styles.innerinputcontianer}>
                  <View style={styles.innericoncontainer}>
                    <View style={styles.innericonouterborderstyles}>
                      <View style={styles.iconborderstyles}>
                        <Icon9 name="onepassword" color={'#A28E65'} size={22} />
                      </View>
                    </View>
                  </View>

                  <View style={styles.inputeyecontainer}>
                    <View>
                      <TextInput
                        style={styles.inputStyle}
                        onChangeText={handlePasswordChange}
                        placeholder="Enter Password"
                        placeholderTextColor="#999"
                        ref={passwordInputRef}
                        blurOnSubmit={false}
                        secureTextEntry={isPasswordSecure}
                        underlineColorAndroid="#f000"
                        returnKeyType="next"
                      />
                    </View>
                    <View>
                      <TouchableOpacity onPress={hadlepasswordvisbility}>
                        <Icon9
                          name={isPasswordSecure ? 'eye-off' : 'eye'}
                          color={'#A28E65'}
                          size={25}
                          style={{marginRight: 15}}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                {errortext !== '' && (
                  <Text style={styles.errorusertext}>{errortext}</Text>
                )}

                <View style={styles.buttonmaincontainer}>
                  <TouchableOpacity
                    style={styles.loginbuttoncontainer}
                    onPress={handleSubmitPress}>
                    <LinearGradient
                      colors={['#FBCD49', '#FFC668']}
                      style={styles.buttongradinentstyles}>
                      <Text style={styles.logintext}>Login</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#A28E65',
              width: '50%',
              marginBottom: 70,
            }}>
            {null}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Login;

const styles = StyleSheet.create({
  slogancontainer: {
    flex: 1,
  },

  cardcontainer: {
    flex: 1,
    alignItems: 'center',
  },

  section2: {
    marginTop: -40,
    height: width > 360 ? 300 : 290,
    width: '88%',
    marginHorizontal: 24,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.23,
    shadowRadius: 10.62,
    elevation: 4,
  },

  errorusertext: {
    marginTop: 1,
    color: 'red',
    textAlign: 'left',
    fontSize: 10,
  },

  buttonmaincontainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  formcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputcontainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  innerinputcontianer: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  innericoncontainer: {
    width: '15%',
  },

  innericonouterborderstyles: {
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
    shadowColor: '#000',
    borderWidth: 0.1,
  },

  iconborderstyles: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },

  innertextinputconatiner: {
    width: '85%',
    backgroundColor: '#f0f0f0',
    height: 50,
    paddingLeft: 20,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },

  inputeyecontainer: {
    width: '85%',
    backgroundColor: '#f0f0f0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingLeft: 20,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },

  logintext: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  loginbuttoncontainer: {
    shadowColor: '#000',
    width: '85%',
    marginHorizontal: 30,
  },

  buttongradinentstyles: {
    width: '100%',
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
