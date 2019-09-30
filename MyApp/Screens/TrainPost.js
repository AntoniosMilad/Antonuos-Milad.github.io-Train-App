import {
     ScrollView,
     View,
     StyleSheet,
     TextInput,
     Text,
     FlatList,
     KeyboardAvoidingView,
     AsyncStorage,

} from 'react-native';
import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../Themes/colors';


export default class TrainPost extends Component {
     static navigationOptions =
          {
               title: 'معلومات عن القطار',

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



     constructor(props) {
          super(props);
          this.state =
               {
                    post: {},
                    comments: [],
                    userComment: '',
                    postID: '',
               }

          this.SubmitComment = this.SubmitComment.bind(this);
     }

     // words = '';


     // get the post on which the user clicked
     // getPost(postID) 
     // {
     //      var url = 'http://localhost:5567/TrainApp/api/TrainPosts'.concat(postID);
     //      //.concat(postID);
     //      fetch(url,
     //           {
     //                method: 'GET'
     //           })
     //           .then(response => response.json())
     //           .then(post => 
     //           {
     //                this.setState({ post: post });

     //           })
     //           .catch(error => console.error('Error getting post:: ', postID));
     // }


     // get the comments of a specific post


     getComments(postID) {
          var url = 'http://192.168.1.3/TrainApp/getPostComments/'.concat(postID);


          fetch(url)
               .then(response => response.json())
               .then(comments => {
                    this.setState({ comments: comments });
               })
               .catch(error => console.error('Error getting comments :: ', error));
     }

     //to make arbitrary IDs



     SubmitComment = () => {
          let
               postID = this.state.postID,
               userID,
               time = new Date().toLocaleString(),
               commentText = this.state.userComment;

          //get comment text
          commentText = this.state.userComment;

          //post the data
          let url = 'http://localhost:5567/addComment';

          let commentFromUser =
          {
               CommentID: ''.concat(10),
               text: commentText,
               timeNow: time,
               TrainPostObj_PostID: postID,
               UserObj_ID: userID
          };
          alert(commentFromUser.UserObj_ID);

          alert(postID);
          return fetch(url,
               {

                    method: 'POST', // or 'PUT'
                    headers: {
                         // Accept: 'application/json',
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                         "CommentID": commentText,
                         "text": commentText,
                         "timeNow": "2019-02-02T00:00:00",
                         "TrainPostObj_PostID": postID,
                         "UserObj_ID": "1"
                    }),
               }
          )
               .then(res => {
                    res.json();
                    console.warn(res);

                    ToastAndroid.showWithGravity(
                         'تمت إضافة التعليق بنجاح',
                         ToastAndroid.SHORT,
                         ToastAndroid.BOTTOM,
                    );
               }
               )
               .catch(error)
          {
               { console.error('Failure adding a comment :: ', error); throw error; };
          }


     }


     render() {

          //params now contains postText, postID, user
          const { params } = this.props.navigation.state.params;
          alert((params.postText).concat(' ___ ').concat(params.postID).concat(' ___ ').concat(params.user));


          //do not forget to bind all the events
          return (
               <View style={styles.container}>

                    <KeyboardAvoidingView>
                         <View
                              style={styles.post}
                              onLayout={() => {
                                   this.setState({ postID: params.postID });
                              }}
                         >

                              <Text> رقم القطار : {this.state.postID} </Text>
                              <Text>                                  </Text>
                              <Text>
                                   وصف القطار : {params.postText}
                              </Text>
                              <Text>                                  </Text>
                              <Text>
                                   Train Time : {this.state.post.TimeNow}
                              </Text>
                         </View>

                         <ScrollView
                              style={styles.commentsView}
                              onLayout={this.getComments.bind(this)}

                         >
                              <FlatList

                                   data={this.state.comments}
                                   keyExtractor={(item, index) => index.toString()}
                                   renderItem={({ item, index }) => {
                                        return (
                                             <View
                                                  style={{

                                                       borderRightWidth: 3,
                                                       borderColor: Colors.headerColor.color,
                                                       margin: 10,
                                                  }}
                                             >
                                                  <Text
                                                       style={{
                                                            fontWeight: 'bold',
                                                            paddingLeft: 5,
                                                       }}
                                                  >
                                                       {item.name}

                                                  </Text>

                                                  <Text
                                                       style={{
                                                            paddingLeft: 15,
                                                       }}
                                                  >
                                                       {item.text}

                                                  </Text>
                                             </View>
                                        )
                                   }}
                              />

                         </ScrollView>

                         <KeyboardAvoidingView
                              style={{

                                   flexDirection: 'row',
                                   justifyContent: 'space-evenly',
                                   alignItems: 'center',

                              }}
                         >
                              <TextInput
                                   placeholder='Write a comment'
                                   //multiline={true}
                                   autoGrow={true}
                                   maxHeight={60}
                                   maxLength={250}
                                   numberOfLines={5}
                                   clearButtonMode='while-editing'
                                   dataDetectorTypes='all'
                                   enablesReturnKeyAutomatically={true}
                                   value={this.state.userComment}
                                   onChangeText={(text) => {
                                        this.setState({ userComment: text })
                                   }
                                   }
                                   style={styles.writeComment}

                              />

                              <TouchableOpacity
                                   onPress={this.SubmitComment}
                              >
                                   <Ionicons
                                        name="md-send"
                                        size={35}
                                        color="#00adff"
                                   />
                              </TouchableOpacity>

                         </KeyboardAvoidingView>
                    </KeyboardAvoidingView>
               </View>
          )
     }
}



const styles = StyleSheet.create({


     container: {

          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.inputColor.color,
     },

     post:
     {
          width: '97%',
          backgroundColor: '#eee',
          borderWidth: 1,
          borderColor: 'white',
          borderRadius: 8,
          margin: 5,
          padding: 5,

     },

     writeComment:
     {
          minWidth: '80%',
          borderBottomColor: 'black',
          width: '85%',
          marginBottom: 5,
          padding: 5,
          fontSize: 16,
          borderRadius: 8,

     },

     commentsView:
     {
          width: '97%',
          borderWidth: 1,
          borderColor: 'white',
          borderRadius: 8,
          padding: 15,
          marginLeft: 5,


     },

});