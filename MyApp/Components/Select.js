import React,{Component} from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity}
 from 'react-native';
 import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
 export default class Select extends Component{
  static  navigationOptions={
    header:null
}
    render(){
  return (
    <View style={styles.container}>
        <Text style={styles.header}>Select</Text>
     <TouchableOpacity style={styles.button}
      onPress={() => {
        this.props.navigation.dispatch(StackActions.reset({
          index: 0,
          actions : [
            NavigationActions.navigate({ routeName: 'SignupUser' })
          ],
        })) 
      }}>
        <Text style={styles.btntext}>وصلنى</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
      onPress={() => {
        this.props.navigation.dispatch(StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Regform' })
          ],
        })) 
      }}
      >
        <Text style={styles.btntext}>وصلهم</Text>
      </TouchableOpacity>
    </View>
  )}}
    const styles = StyleSheet.create({
        container: {
        flex:1,
        alignSelf:'stretch',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#190463',
        paddingLeft:60,
        paddingRight:60
      },
        header:{
          fontSize:30,
          color:'#ffffff',
          paddingBottom:10,
          marginBottom:40,
          textAlign:'center'
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
