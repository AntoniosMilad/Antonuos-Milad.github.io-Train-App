import React,{Component} from 'react';
import { StyleSheet,Navigator, Text, View ,TextInput,TouchableOpacity,Image
,Button}
 from 'react-native';
 import Select from './Select';
 import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
export default class Login extends Component{
  static  navigationOptions={
    header:null
}

    render(){
      
  return (
      
    <View style={styles.container}>
      <Text style={styles.header}>Sign In</Text>
      <TextInput style={styles.textinput} placeholder="Your Email"
      underlineColorAndroid={'transparent'}/>
      <TextInput style={styles.textinput} placeholder="Your Password"
      secureTextEntry={true} underlineColorAndroid={'transparent'}/>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btntext}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
      onPress={() => {
        this.props.navigation.dispatch(StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Select' })
          ],
        })) 
      }}>
        <Text style={styles.btntext}>Sign Up</Text>
      </TouchableOpacity>
      
    </View>
  ) 
}}

const styles = StyleSheet.create ({
  container: {
  flex:1,
  alignSelf:'stretch',
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'#190463',
  paddingHorizontal:60
},
  header:{
    fontSize:30,
    color:'#ffffff',
    paddingBottom:10,
    marginBottom:40,
    textAlign:'center'
  } ,
  textinput:{
    alignSelf:'stretch',
    borderBottomColor:'#ffffff',
    borderBottomWidth:1,
    height:40,
    marginBottom:30,
    color:'#ffffff'
  },
  button:{
    alignItems:'center',
    padding:15,
    paddingLeft:50,
    paddingRight:50,
    backgroundColor:'#ffffff',
    marginTop:20,
    borderRadius:20
  },
  btntext:{
      fontSize:20,
      fontWeight:'bold'
  }
});
