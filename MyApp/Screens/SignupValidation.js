// import React, { Component } from 'react';
// import { View, TextInput, Image, Animated, Keyboard, KeyboardAvoidingView } from 'react-native';
// import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from '../Themes/KAVstyles';
// import logo from '../../assets/logo.png';

// class Signup extends Component {
//      constructor(props) {
//           super(props);

//           this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
//      }

//      componentWillMount() {
//           this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
//           this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
//      }

//      componentWillUnmount() {
//           this.keyboardWillShowSub.remove();
//           this.keyboardWillHideSub.remove();
//      }

//      keyboardWillShow = (event) => {
//           Animated.timing(this.imageHeight, {
//                duration: event.duration,
//                toValue: IMAGE_HEIGHT_SMALL,
//           }).start();
//      };

//      keyboardWillHide = (event) => {
//           Animated.timing(this.imageHeight, {
//                duration: event.duration,
//                toValue: IMAGE_HEIGHT,
//           }).start();
//      };

//      render() {
//           return (
//                <KeyboardAvoidingView
//                     style={styles.container}
//                     behavior="padding"
//                >
//                     <Animated.Image source={logo} style={[styles.logo, { height: this.imageHeight }]} />
                   
//                     <TextInput
//                          placeholder="Username"
//                          style={styles.input}
//                     />

//                     <TextInput
//                          placeholder="Email"
//                          style={styles.input}
//                     />
//                     <TextInput
//                          placeholder="Phone Number"
//                          style={styles.input}
//                     />
//                     <TextInput
//                          placeholder="Password"
//                          style={styles.input}
//                     />
//                     <TextInput
//                          placeholder="Confirm Password"
//                          style={styles.input}
//                     />
//                </KeyboardAvoidingView>
//           );
//      }
// };

// export default Signup;









import React from 'react'
import {
     View,
     TextInput,
     StyleSheet,
     TouchableOpacity,
     Text,
} from 'react-native'

export default class SignUp extends React.Component {
     state = {
          username: '', 
          password: '', 
          email: '', 
          phone_number: '', 
          confirmPassword: ''
     }

     Validate=()=>
     {
          //console.warn(this.state.username);
        
          var regex_email = /^[a-z0-9]{3,}@(gmail|yahoo|outlook)\.(com|net|org)$/ig;
          var regex_pass = /^(([a-zA-Z]+)([a-zA-Z0-9]*)){8,}$/g;
          var regex_phone = /^\+[0-9]{1,1}(01)[0-9]{9,9}$/g;

          var phoneResult = regex_phone.test(this.state.phone_number);
          var passResult = regex_pass.test(this.state.password);
          var confirmPassResult = this.state.password === this.state.confirmPassword; 
          var emailResult = regex_email.test(this.state.email);
     
          if(!phoneResult)
          {
               alert("من فضلك أدخل رقم تليفون صحيحا ");
               return false;
          }
          if (!passResult) {
               alert("من فضلك أدخل ادخل كلمة مرور صحيحة لا تقل عن تمانية أحرف ");
               return false;
          }
          if (!emailResult) {
               alert("من فضلك أدخل بريد الكتروني صحيح ");
               return false;
          }
          if (!confirmPassResult) {
               alert("كلمة المرور لا تطابق تأكيد كلمة المرور ");
               return false;
          }
          console.warn('success');
          return true;
          
     }
     
     

     render() {
          return (
               <View style={styles.container}>
                    <TextInput
                         style={styles.input}
                         placeholder='Username'
                         autoCapitalize="none"
                         placeholderTextColor='#ccc'
                         
                    />
                    <TextInput
                         style={styles.input}
                         placeholder='Password'
                         secureTextEntry={true}
                         autoCapitalize="none"
                         placeholderTextColor='#ccc'
                         onChangeText={(text)=>this.setState({password:text})}
                    />

                    <TextInput
                         style={styles.input}
                         placeholder='Confirm Password'
                         secureTextEntry={true}
                         autoCapitalize="none"
                         placeholderTextColor='#ccc'
                         onChangeText={(text) => this.setState({ confirmPassword: text })}
                    />

                    <TextInput
                         style={styles.input}
                         placeholder='Email'
                         autoCapitalize="none"
                         placeholderTextColor='#ccc'
                         onChangeText={(text) => this.setState({ email: text })}
                    />
                    <TextInput
                         style={styles.input}
                         placeholder='Phone Number'
                         autoCapitalize="none"
                         placeholderTextColor='#ccc'
                         onChangeText={(text) => this.setState({ phone_number:text })}
               />

                    <TouchableOpacity 
                         onPress={this.Validate.bind(this)}>
                         <Text style={{
                              backgroundColor: '#3399ff',
                              borderColor: 'white',
                              borderWidth: 1,
                              borderRadius: 7,
                              color: 'white',
                              fontSize: 18,
                              overflow: 'hidden',
                              padding: 10,
                              textAlign: 'center',
                              width: 160,
                         }}>Signup</Text>
                    </TouchableOpacity>
               </View>
          )
     }
}

const styles = StyleSheet.create({
     input: {
          width: 350,
          height: 55,
          margin: 10,
          padding: 8,
          color: '#000038',
          borderRadius: 7,
          fontSize: 16,

     },
     container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
     }
})