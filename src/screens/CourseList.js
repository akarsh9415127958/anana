import React from 'react'
import {Text,TouchableOpacity, View,Image} from 'react-native'



export default class CourseList extends React.Component{
    render(){
        const {img,title, bg, onPress} = this.props
        return(
            <TouchableOpacity
                onPress={onPress}
                style={{
                    flexDirection:"row",
                    backgroundColor:bg,
                    padding:20,
                    marginHorizontal:20,
                    borderRadius:20,
                    alignItems:"center",
                    marginTop:10
                }}
            >
                    <Image
                        source={img}
                        style={{width:40,height:40}}
                    />

                    <View>
                         <Text style={{
                             color:"#345c74",
                             fontFamily:"dancing",
                             fontSize:20,
                             paddingHorizontal:20,
                             width:170
                         }}>{title}</Text>
                         
                    </View>
                   
                  
            </TouchableOpacity>
        )
    }
}