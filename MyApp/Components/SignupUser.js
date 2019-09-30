import React,{Component} from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity}
 from 'react-native';

 export default class SignupUser extends Component{
  constructor()
  {
    super();
    this.state={
      name:'',
      email:'',
      password:''
    }
  }
  static  navigationOptions={
    header:null,
  
  }
updateValue(text,field)
{
    if(field=='name')
    {
      this.setState({
        name:text,
      })
    }
    else if(field=='email')
    {
      this.setState({
        email:text,
      })
    }
    else(field=='password')
    {
      this.setState({
        password:text,
      })
    }
}
submit()
{
  let collection={}
  collection.name=this.state.name,
  collection.password=this.state.password,
  collection.email=this.state.email
  console.warn(collection);
  var url = 'http://localhost:55555/api/OrdinaryUsers';


fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(collection), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.then(response => console.log('Success:', JSON.stringify(response)))
.catch(error => console.error('Error:', error));

}

  render(){
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>
      <TextInput style={styles.textinput} placeholder="Your Name"
      underlineColorAndroid={'transparent'}
      onChangeText={(Text)=>this.updateValue(text,'name')}
      
      />

<TextInput style={styles.textinput} placeholder="Your Email"
      underlineColorAndroid={'transparent'}
      onChangeText={(Text)=>this.updateValue(text,'email')}
      />
      <TextInput style={styles.textinput} placeholder="Your Password"
      secureTextEntry={true} underlineColorAndroid={'transparent'}
      onChangeText={(Text)=>this.updateValue(text,'password')}
      />



<TouchableOpacity style={styles.button}>
        <Text style={styles.btntext}>Sign Up </Text>
        onPress= onPress={this.submit.bind(this)}
      </TouchableOpacity>
      {/* <button onPress={}></button> */}
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