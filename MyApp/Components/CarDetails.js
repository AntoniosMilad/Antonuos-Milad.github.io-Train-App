import React,{Component} from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity}
 from 'react-native';
 export default class CarDetails extends Component{
  static  navigationOptions={
    header:null
}

    render(){
  return(
    <View style={styles.container}>
    <Text style={styles.header}>Travell Details</Text>
    <TextInput style={styles.textinput} placeholder="Travell Date"
    underlineColorAndroid={'transparent'}/>
<TextInput style={styles.textinput} placeholder="City"
    underlineColorAndroid={'transparent'}/>
<TextInput style={styles.textinput} placeholder="Travel From"
    underlineColorAndroid={'transparent'}/>

<TextInput style={styles.textinput} placeholder="Travel To"
    underlineColorAndroid={'transparent'}/>

<TextInput style={styles.textinput} placeholder="Car Type"
    underlineColorAndroid={'transparent'}/>
    <TouchableOpacity style={styles.button}>
        <Text style={styles.btntext}> Save </Text>
      </TouchableOpacity>

</View>
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