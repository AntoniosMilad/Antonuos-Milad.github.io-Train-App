import * as React from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity,Image
,Button}
 from 'react-native';
 import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
  import {ImagePicker, Permissions, Constants} from 'expo';
//  import * as ImagePicker from 'expo-image-picker';
import SignupUser from './SignupUser';

export default class Regform extends Component{
  static  navigationOptions={
    header:null 
}
state = {
  image: null,
};
    render(){
      let { image } = this.state;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Registration</Text>
      <TextInput style={styles.textinput} placeholder="Your Name"
      underlineColorAndroid={'transparent'}/>
      <TextInput style={styles.textinput} placeholder="Your Email"
      underlineColorAndroid={'transparent'} keyboardType="email-address"/>
      <TextInput style={styles.textinput} placeholder="Your Password"
      secureTextEntry={true} underlineColorAndroid={'transparent'}/>

      <TextInput style={styles.textinput} placeholder="Your Phone"
       underlineColorAndroid={'transparent'}/>
       //photoButton
       <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <TouchableOpacity style={styles.button}
      onPress={() => {
        this.props.navigation.dispatch(StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'CarDetails' })
          ],
        })) 
      }}>
        <Text style={styles.btntext}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  )
}
componentDidMount() {
  this.getPermissionAsync();
}

getPermissionAsync = async () => {
  if (Constants.platform.ios) {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }
  }
}

_pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
  });

  console.log(result);

  if (!result.cancelled) {
    this.setState({ image: result.uri });
  }
};
}
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