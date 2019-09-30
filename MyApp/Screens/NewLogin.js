import React, { Component } from 'react';
import {
     TextInput,
     StyleSheet,
     SafeAreaView,
     Alert,
     TouchableOpacity,
     Text,
     KeyboardAvoidingView,
     ToastAndroid,
     AsyncStorage,

} from 'react-native';
import Colors from '../Themes/colors';



export default class Login extends Component {

     state =
          {
               enteredUsername: '',
               enteredPassword: '',
               allUsersInDB: [],
          }


     LoginHandler = () => {

          let URL = 'http://192.168.1.3/TrainApp/api/Login';
          fetch(URL)
               .then(res => res.json())
               .then(allUsers => {
                    this.setState({ allUsersInDB: allUsers });
               })
               .then(() => {

                    this.state.allUsersInDB.map((user, index) => {
                         if
                              (this.state.enteredUsername.localeCompare(user.Username) == 0 && this.state.enteredPassword.localeCompare(user.pass) == 0) {
                              ToastAndroid.showWithGravity(
                                   'تم تسجيل الدخول بنجاح',
                                   ToastAndroid.SHORT,
                                   ToastAndroid.BOTTOM);

                              this.props.navigation.navigate('triansList', { user: user });
                         }
                         else {
                              Alert.alert(
                                   ' ', // alert title
                                   'اسم المستخدم أو كلمة المرور غير صحيحة، من فضلك حاول مرة أخرى', // alert message
                                   [
                                        {
                                             text: 'حسنا'//, onPress: () => console.log('Ask me later pressed') 
                                        },
                                   ],
                                   { cancelable: true },
                              );
                         }
                    });
               })
               .catch(error => console.error('Error occured while logging in ::  ', error));

     }


     render() {
          return (

               <SafeAreaView style={styles.container}>
                    <KeyboardAvoidingView behavior='padding'>
                         <TextInput
                              placeholder='اسم المستخدم'
                              placeholderTextColor='#BFBFBF'
                              style={styles.inputs}
                              value={this.state.user}
                              onChangeText={(text) => {
                                   this.setState({ enteredUsername: text })
                              }
                              }
                         />

                         <TextInput
                              placeholder='كلمة المرور'
                              placeholderTextColor='#BFBFBF'
                              style={styles.inputs}
                              secureTextEntry={true}
                              onChangeText={(text) => {
                                   this.setState({ enteredPassword: text })
                              }
                              }
                         />
                    </KeyboardAvoidingView>

                    <SafeAreaView style={styles.TouchableOpacityContainer}>
                         <TouchableOpacity
                              onPress={this.LoginHandler}
                         >
                              <Text style={styles.TouchableOpacity}> تسجيل الدخول </Text>
                         </TouchableOpacity>

                         <TouchableOpacity
                              onPress={() => {
                                   this.props.navigation.navigate('signup');
                              }}
                         >
                              <Text style={styles.TouchableOpacity}> حساب جديد </Text>
                         </TouchableOpacity>

                         <TouchableOpacity
                              onPress={() => {
                                   this.props.navigation.navigate('about');
                              }}
                         >
                              <Text style={styles.TouchableOpacity1}> عن البرنامج   </Text>
                         </TouchableOpacity>

                    </SafeAreaView>
               </SafeAreaView>
          );
     }




     //Navigation options for the stack navigator
     static navigationOptions =
          {
               title: 'تسجيل الدخول',
               headerStyle: {
                    backgroundColor: Colors.headerColor.color,
               },

               headerTintColor: 'white',
               headerTitleStyle: {
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    textAlign: "center",
                    flex: 1,
               },
               headerLeft: null,

          };


}
const styles =
     StyleSheet.create(
          {
               container: {
                    flex: 1,
                    justifyContent: 'center',
                    fontSize: 17,
                    backgroundColor: Colors.inputColor.color,
                    color: Colors.inputColor.color,
               },
               inputs: {
                    width: '85%',
                    padding: 10,
                    margin: 20,
                    marginLeft: 25,
                    marginBottom: 15,
                    borderBottomWidth: 2,
                    borderRadius: 20,
                    borderBottomColor: '#79a8a9',
                    color: 'black',
                    fontSize: 17,
                    textAlign: 'right',
               },
               TouchableOpacity: {
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    alignContent: 'center',
                    textAlign: 'center',
                    borderColor: 'white',
                    borderWidth: 1,
                    borderRadius: 10,
                    fontSize: 18,
                    width: 300,
                    padding: 10,
                    marginLeft: 30,
                    marginTop: 40,
                    backgroundColor: Colors.buttonsColor.color,
                    color: Colors.inputColor.color,
               },
               TouchableOpacity1: {
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    alignContent: 'center',
                    textAlign: 'center',


                    borderRadius: 10,
                    fontSize: 20,
                    width: 100,
                    height: 50,
                    padding: 5,
                    marginLeft: 130,
                    marginTop: 130,
                    backgroundColor: Colors.inputColor.color,
                    color: Colors.buttonsColor.color,
               }
          }
     );

