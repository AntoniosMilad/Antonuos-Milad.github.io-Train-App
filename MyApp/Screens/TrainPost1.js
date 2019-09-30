import {
    ScrollView,
    TouchableHighlight,
    View,
    StyleSheet,
    TextInput,
    Text,
    FlatList,
    KeyboardAvoidingView

} from 'react-native';
import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../Themes/colors';





export default class TrainPost extends Component {
    static navigationOptions = {
        title: 'قطار 81',
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


    words = '';
    state =
        {
            post: {},
            comments: [
                {user: 'Ibrahim Ahmed', comment: 'القطر هنا اه'},
                { user: 'Saad', comment: 'لسه موصلش يا معلم' },
                {user: 'Taha', comment: 'القطر في اسيوط يا هندسه '},
                  
            ],
            userComment: '',
        }




    // getPost(postID = this.props.navigation.state.params.postID) {
    //     console.warn(...postID);
    //     var url = 'http://192.168.137.42/TrainAppLast/api/TrainPosts/'.concat(postID);
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(post => {
    //             console.warn(post);
    //             this.setState({ post: post });
    //         })
    //         .catch(error => console.error('Error Catched in get post:: ', postID));

    // }

    // getComments(postID = this.props.navigation.state.params.postID) {
    //     var url = 'http://192.168.137.42/TrainAppLast/api/CommentsOntrains/'.concat(postID);

    //     fetch(url)
    //         .then(response => response.json())
    //         .then(comments => {
    //             this.setState({ comments: comments });
    //         })
    //         .catch(error => console.error('Error Catched:: ', error));
    // }


    // SubmitComment(postID, userID, time, commentText) {
    //     //get userID
    //     _retrieveData = async () => {
    //         try {
    //             userID = await AsyncStorage.getItem('userID');
    //             if (value !== null) {
    //                 // We have data!!
    //                 console.log(value);
    //             }
    //         } catch (error) {
    //             // Error retrieving data
    //         }
    //     };

    //     //get post id
    //     postID = this.props.navigation.state.params.postID;

    //     //get time
    //     time = new Date().toLocaleString();

    //     //get comment text
    //     commentText = this.state.userComment;

    //     //post the data
    //     let url = 'http://192.168.137.42/TrainAppLast/api/CommentsOntrains/'
    //         .concat({
    //             CommentID: '2',
    //             text: commentText,
    //             timeNow: time,
    //             TrainPostObj_PostID: postID,
    //             UserObj_ID: userID
    //         });

    //     fetch(url,
    //         {
    //             method: 'POST', // or 'PUT'
    //             // body: JSON.stringify(collection), // data can be `string` or {object}!
    //             headers: ({
    //                 'Content-Type': 'application/json'
    //             })
    //         })
    //         .then(res => res.json())
    //         .then(response => {
    //             alert('Success:', JSON.stringify(response));
    //             ToastAndroid.showWithGravity(
    //                 'تمت إضافة حسابك بنجاح',
    //                 ToastAndroid.SHORT,
    //                 ToastAndroid.BOTTOM,
    //             );
    //             this.props.navigation.navigate('choose');
    //         })
    //         .catch(error => console.error('Failure ::', error));

    //     console.warn(commentText, postID, userID, time);
    // }

    SubmitComment = ()=>
    {
        this.state.comments.push({user : '', comment: this.state.userComment});
        console.warn(this.state.userComment);
    }


    // componentWillUpdate()
    // {
    //     console.warn(this.state.userComment);
    // }



    render = () => {
        //do not forget to bind all the events
        return (
            <View style={styles.container}>

                <KeyboardAvoidingView behavior='padding' enabled>
                    <View
                        style={styles.post}
                        //onLayout={this.getPost.bind(this.state)}
                    >

                        <Text> قطار رقم 81 </Text>
                        <Text>                                  </Text>
                        <Text>
                        يتحرك هذا القطار من القاهرة الى أسوان قيام من الجيزة 8:50 ص
                        </Text>
                        <Text>                                  </Text>
                        
                    </View>

                    <ScrollView
                        style={styles.commentsView}
                        //onLayout={this.getComments.bind(this)}

                    >
                        <FlatList
                            data={this.state.comments}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => {
                                return (
                                    <View
                                        style={{

                                            borderLeftWidth: 3,
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
                                            {item.user}

                                        </Text>

                                        <Text
                                            style={{
                                                paddingLeft: 15,
                                            }}
                                        >
                                            {item.comment}

                                        </Text>
                                    </View>
                                )
                            }}
                        />

                    </ScrollView>

                    <KeyboardAvoidingView  behavior='padding' enabled
                        style={{

                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',

                        }}
                    >
                        <TextInput
                            placeholder='Write a comment'
                            multiline={true}
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
        backgroundColor:'white',


    },

    post:
    {
        width: '97%',
        backgroundColor:'#e3f1f6',
        borderWidth: 1,
        borderColor: Colors.headerColor.color,
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
        width: '100%',
        borderWidth: 0,
         borderRadius: 8,
        padding: 7,
        marginLeft: 5,
        backgroundColor: 'white',

    },

});