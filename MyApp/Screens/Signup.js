import React, { Component } from 'react';
import {
     View,
     TextInput,
     StyleSheet,
     TouchableOpacity,
     Text,
     KeyboardAvoidingView,
     ScrollView,
     SafeAreaView,
     //BackHandler,
     ToastAndroid,
     Alert

} from 'react-native';
import Colors from '../Themes/colors';

export default class SignUp extends React.Component {

     static navigationOptions = {
          title: 'حساب جديد',
          headerStyle: {
               backgroundColor: Colors.headerColor.color,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
               fontWeight: 'bold',
               alignSelf: 'center',
               textAlign: "center",
               flex: 1,
               paddingRight: 40,
          },

     };

     state = 
     {
          username: '', 
          password: '',
          confirmPassword:'',
          email: '',
          phone_number: '',

          userValid : true,
          passwordValid: false,
          confirmPassValid: false,
          emailValid: false,
          phoneValid: false,

     }

     onChangeText = (key, val) => {
          this.setState({ [key]: val })
     }

     signUp = () => 
     {    
          var i = 1;
          
          try 
          {
               // if(this.validate() == 4)
               // {
               let user = 
               {
                    ID : 'fromMobileUser'.concat(i++),
                    Username : this.state.username,
                    Password : this.state.password,
                    Email : this.state.email,
                    phone : this.state.phone_number  
               }

               let url = 'http://192.168.137.42/Trains/api/SignUp';
               fetch(url,
                    {
                         method: 'POST', // or 'PUT'
                         body: JSON.stringify(user),
                         headers: ({
                              'Content-Type': 'application/json'
                         })
                    })
                    .then(res => res.json())
                    .then(response => 
                         {
                              alert('Success:', JSON.stringify(response));
                              ToastAndroid.showWithGravity(
                                   'تمت إضافة حسابك بنجاح',
                                   ToastAndroid.SHORT,
                                   ToastAndroid.BOTTOM,
                              );
                              this.props.navigation.navigate('choose');
                         })
                    .catch(error => console.error('Failure ::', error));
               
               
          } //end of try
          catch (err) 
          {
               console.log('error signing up: ', err)
          }
     }//end of signup





     // validate user input
     // validate(text, type)
     // {
     //       var userValid = 0;

     //      if (type == 'password') {
     //           passRegex = /^[a - zA - Z0-9]\w{8,}$/;
     //           if (passRegex.test(text)) {
     //                this.setState({ passwordValid: true });
     //               // console.warn('phone is correct '.concat(this.state.passwordValid));
     //                userValid +=1;
     //           }
     //           else {
     //                Alert.alert(
     //                     ' ', // alert title
     //                     'يجب أن لا تقل كلمة المرور عن ثمانية احرف باللغة الانجليزية، من فضلك حاول مرة أخرى', // alert message
     //                     [
     //                          {
     //                               text: 'حسنا'
     //                          }
     //                     ],
     //                     { cancelable: true },
     //                );
     //           }
     //      }

     //      else if (type == 'confirmPassword') {

     //           if (this.state.confirmPassword.localeCompare(this.state.password) == 0) {
     //                this.setState({ confirmPassValid: true });
     //               // console.warn('passwords match '.concat(this.state.confirmPassValid));
     //                userValid += 1;
     //           }
     //           else {
     //                Alert.alert(
     //                     ' ', // alert title
     //                     'تأكيد كلمة المرور لا تتطابق مع كلمة المرور، من فضلك حاول مرة أخرى', // alert message
     //                     [
     //                          {
     //                               text: 'حسنا'
     //                          }
     //                     ],
     //                     { cancelable: true },
     //                );
     //           }
     //      }


     //      else if (type == 'email') {
     //           emailRegex = /^[a-z0-9]{3,}@(gmail|yahoo|outlook)\.(com|net|org)$/ig;
     //           if (emailRegex.test(text)) {
     //                this.setState({ emailValid: true });
     //                //console.warn('email is correct '.concat(this.state.emailValid));
     //                userValid += 1;
     //           }
     //           else {
     //                Alert.alert(
     //                     ' ', // alert title
     //                     'صيغة البريد الالكتروني خاطئة، من فضلك حاول مرة أخرى', // alert message
     //                     [
     //                          {
     //                               text: 'حسنا'
     //                          }
     //                     ],
     //                     { cancelable: true },
     //                );
     //           }
     //      }

     //      else //(type == 'phone_number') 
     //      {
     //           phoneRegex = /(01)[0-9]{9}/g;
     //           if (phoneRegex.test(text)) {
     //                this.setState({ phoneValid: true });
     //               // console.warn('phone is correct '.concat(this.state.phoneValid));
     //                userValid += 1;
     //           }
     //           else 
     //           {
     //                Alert.alert(
     //                     ' ', // alert title
     //                     'يجب أن لا يقل ولا يزيد رقم الهاتف عن 11 رقم، من فضلك حاول مرة أخرى', // alert message
     //                     [
     //                          {
     //                               text: 'حسنا'
     //                          }
     //                     ],
     //                     { cancelable: true },
     //                );
     //           }


     //      }
     //      // else 
     //      // {
     //      //      console.warn("too lazy to validate");
     //      // }


     //      return userValid;

     // }   //end of validate

     render() {

          return (
               <SafeAreaView style={styles.container}>
                    <KeyboardAvoidingView behavior='padding' enabled>
                         <View>

                              <ScrollView>
                                   <TextInput
                                        style={styles.input}
                                        placeholder='اسم المستخدم'
                                        autoCapitalize="none"
                                        placeholderTextColor='#BFBFBF'
                                        onChangeText={val => this.onChangeText('username', val)}
                                        //onEndEditing={(e) => this.validate(e.nativeEvent.text, 'username')}
                                        

                                   />
                                   <TextInput
                                        style={styles.input}
                                        placeholder='كلمة المرور'
                                        secureTextEntry={true}
                                        autoCapitalize="none"
                                        placeholderTextColor='#BFBFBF'
                                        onChangeText={val => this.onChangeText('password', val)}
                                        //onEndEditing={(e) => this.validate(e.nativeEvent.text, 'password')}
                                   />

                                   <TextInput
                                        style={styles.input}
                                        placeholder='تأكيد كلمة المرور'
                                        secureTextEntry={true}
                                        autoCapitalize="none"
                                        placeholderTextColor='#BFBFBF'
                                        onChangeText={val => this.onChangeText('confirmPassword', val)}
                                       // onEndEditing={(e) => this.validate(e.nativeEvent.text, 'confirmPassword')}
                                   />

                                   <TextInput
                                        style={styles.input}
                                        placeholder='البريد الاليكتروني'
                                        autoCapitalize="none"
                                        placeholderTextColor='#BFBFBF'
                                        onChangeText={val => this.onChangeText('email', val)}
                                        //onEndEditing={(e) => this.validate(e.nativeEvent.text, 'email')}
                                   />
                                   <TextInput
                                        style={styles.input}
                                        placeholder='رقم الهاتف'
                                        autoCapitalize="none"
                                        placeholderTextColor='#BFBFBF'
                                        keyboardType='numeric'
                                        onChangeText={val => this.onChangeText('phone_number', val)}
                                        //onEndEditing={(e) => this.validate(e.nativeEvent.text, 'phone_number')}
                                   />

                                   <TouchableOpacity onPress={this.signUp}>
                                        <Text style={styles.TouchableOpacity}>إنشاء حساب</Text>
                                   </TouchableOpacity>
                              </ScrollView>

                         </View>
                    </KeyboardAvoidingView>

               </SafeAreaView>
          )
     }
}

const styles = StyleSheet.create({
     input: {
          width: 300,
          height: 55,
          margin: 10,
          padding: 8,
          color: 'black',
          borderBottomWidth: 1,
          borderBottomColor: '#79a8a9',
          fontSize: 17,
          textAlign: 'right',

     },
     container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.contentColor.color,
          // color: Colors.inputColor.color,
          marginTop: 30,
     },
     TouchableOpacity: {
          backgroundColor: Colors.buttonsColor.color,
          color: Colors.inputColor.color,
          borderColor: 'white',
          borderWidth: 1,
          borderRadius: 10,
          fontSize: 18,
          overflow: 'hidden',
          padding: 10,
          textAlign: 'center',
          width: 300,
          marginTop: 30,
          marginLeft: 10,
     },
})