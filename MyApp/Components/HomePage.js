import React,{Component} from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity,Image
,Button}
 from 'react-native';
 import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

import SignupUser from './SignupUser';
import {ImagePicker} from 'react-native-image-picker';

export default class HomePage extends Component{
  static  navigationOptions={
    header:null
}
    render(){
  return (
   <view style={styles.container}></view>
  )
}}

const styles = StyleSheet.create({
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
  },
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