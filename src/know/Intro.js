import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  Dimensions,
  Text,TouchableOpacity,ScrollView
} from 'react-native';

import Chapters from '../screens/Chapters';

const { width, height } = Dimensions.get('window');

export default class Intro extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
        isReady: false,
        status: "",
        quality: "",
        error: ""
    };
  }
  render() {
    return (
      
      <View style={style.container}>
      <ScrollView>
       <View
          style={{
            flexDirection: 'row',
            width: '100%',
            paddingHorizontal: 20,
          }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Xd')}
            style={{
              paddingHorizontal: 10,
              paddingVertical: 13,
              borderRadius: 10,
              marginTop: 30,
              backgroundColor: '#8bbcdb',
            }}>
            <Image
              source={require('../images/a1.png')}
              style={{ width: 20, height: 15 }}
            />
          </TouchableOpacity></View>
       
      
        <Chapters
          color="#fde6e6"
          percent={25}
          duration="9 Min 3 Sec"
          title="Social Behaviour"
          num={1}
        />

        <Text
          style={{
            fontFamily: 'Medium',
            textAlign: 'justify',
            color: '#345c74',
            paddingLeft: 42,
            paddingRight: 35,
          }}>
          Some children present with an abundance of challenges involving
          academic functioning, communication and physical difficulties.
          Combined these children face a remarkable struggle keeping up with
          their peers. Parents of these children are faced with juggling the
          competing presenting needs of the child and are often entwined with a
          variety of service providers including psychologists, speech-language
          pathologists,medical specialists and the like. When behaviour issues
          arise, the parent may be caught cycling through the service providers
          seeking the most appropriate remedy to the problem. For many, the
          behavioural issues escalate when the child is between six and eight
          years of age.
        </Text>
      </ScrollView>
      </View>
    );
  }
}
const style = StyleSheet.create({
  video: {
    width: width,
    height: height / 3,
  },
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
