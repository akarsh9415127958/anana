import React from 'react'
import { View,
    Text,
    ImageBackground,
    TouchableOpacity,
    KeyboardAvoidingView,
    Image,
    Icon,
    Platform,} from 'react-native'
import {ScrollView,TextInput} from 'react-native-gesture-handler'
import CourseList from '../screens/CourseList'
import { StatusBar } from 'expo-status-bar';
import * as Updates from 'expo-updates';
export default class Home extends React.Component{
    render(){
        return(
           <ImageBackground
            source={require('../images/Home.png')}
            style={{width:"100%",height:"100%"}}
           >
               <ScrollView>
                   <View style={{
                       width:"100%",
                       alignItems:"flex-end",
                       paddingHorizontal:20
                   }}>
                      
                   </View>
                   <Text style={{
                       paddingHorizontal:20,
                       fontSize:45,
                       paddingTop:40,
                       fontFamily:"dancing2",
                       color:"#FFF"
                   }}>
                       Welcome Patron
                   </Text>

                   
                   <View style={{
                       flexDirection:"row",
                       backgroundColor:"#FFF2F2",
                       marginTop:15,
                       marginHorizontal:20,
                       borderRadius:20,
                       paddingVertical:30,
                       paddingLeft:30
                   }}>
                       <View>
                           <Text style={{
                               color:"#345c74",
                               fontSize:27,
                               fontFamily:"dancing2",
                               width:250,
                               paddingRight:100 
                           }}>
                               Start learning new Staff
                           </Text>
                           <TouchableOpacity
                                onPress={()=>this.props.navigation.navigate('Cources')}
                                style={{
                                    flexDirection:"row",
                                    backgroundColor:"#f58084",
                                    alignItems:"center",
                                    marginTop:20,
                                    width:150,
                                    paddingVertical:10,
                                    borderRadius:14,
                                    paddingHorizontal:10
                                }}
                           >
                                    <Text style={{
                                        color:"#FFF",
                                        fontFamily:"dancing2",
                                        fontSize:18.6
                                    }}> All Topics</Text>  
                                    <Image
                                        source={require('../images/a3.png')}
                                        style={{marginLeft:20,width:8,height:8}}
                                    />
                           </TouchableOpacity>
                       </View>
                       <Image
                            source={require('../images/undraw.png')}
                            style={{marginLeft:-80,marginTop:35}}
                       />

                   </View>
                   <Text style={{
                       color:"#345c74",
                       fontFamily:"dancing2",
                       fontSize:30,
                       paddingHorizontal:20,
                       marginTop:20,
                       marginBottom:10
                   }}> Popular Topics :-</Text>

                   <CourseList
                         img={require('../images/medic.gif')}
                         title="Medical"
                         bg="#fdddf3"
                   />
                    <CourseList
                      img={require('../images/development.gif')}
                      title="Development"
                      bg="#fef8e3"
                   />
                    <CourseList
                       img={require('../images/learning.gif')}
                       title="Learning"
                       bg="#fcf2ff"
                   />
               </ScrollView>
               <StatusBar style="transulent" />
           </ImageBackground>
        )
    }
}