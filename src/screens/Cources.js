import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground} from 'react-native'
import {Modalize} from 'react-native-modalize'
import CourseList from '../screens/CourseList'
import { StatusBar } from 'expo-status-bar';
export default class Cources extends React.Component{
    render(){
        return(
            <ImageBackground
                source={require('../images/cat.png')}
                style={{width:"100%",height:"100%"}}
            >
                <View style={{
                    flexDirection:"row",
                    width:"100%",
                    paddingHorizontal:20
                }}>
                    <TouchableOpacity
                        onPress={()=>this.props.navigation.navigate("Home")}
                        style={{
                            paddingHorizontal:10,
                            paddingVertical:13,
                            borderRadius:10,
                            marginTop:30,
                            backgroundColor:"#8bbcdb"
                        }}
                    >
                        <Image
                            source={require('../images/a1.png')}
                            style={{width:20,height:15}}
                        />
                    </TouchableOpacity>
                 
                </View>
                <Text style={{
                    color:"#FFF",
                    fontSize:35,
                    fontFamily:"dancing",
                    width:200,
                    alignSelf:"center",
                    textAlign:"center",
                    marginTop:34
                    
                    }}>
                    All Topics
                </Text>

                <Modalize
                    handleStyle={{
                        marginTop:30,
                        backgroundColor:"#e9e9e9",
                        width:80
                    }}
                    modalStyle={{
                        borderTopLeftRadius:60,
                        borderTopRightRadius:60
                    }}
                    alwaysOpen={500}
                    scrollViewProps={{showsVerticalScrollIndicator:false}}
                >
                    <View style={{marginTop:40}}>
                            <CourseList
                                  onPress={() => this.props.navigation.navigate('Xd')}
                                  img={require('../images/behaviour.gif')}
                                  title="Social Behaviour"
                                  bg="#fdddf3"
                            />
                             <CourseList
                                onPress={()=>this.props.navigation.navigate('Body')}
                                img={require('../images/development.gif')}
                                title="Body Development"
                                bg="#fef8e3"
                            />
                             <CourseList
                                 onPress={()=>this.props.navigation.navigate('Medic')}
                                 img={require('../images/medic.gif')}
                                 title="Medical Support"
                                 bg="#fcf2ff"
                            />
                             <CourseList
                               img={require('../images/mental.gif')}
                               onPress={()=>this.props.navigation.navigate('Mental')}
                              title="Mental Health"
                              bg="#fff0ee"/>
                             <CourseList
                                 onPress={()=>this.props.navigation.navigate('Learning')}
                                 img={require('../images/learning.gif')}
                                 title="Leanings"
                                 bg="#fdddf3"
                            />
                             
                    </View>
                </Modalize><StatusBar style = "translucent"/>
            </ImageBackground>
        )
    }
}