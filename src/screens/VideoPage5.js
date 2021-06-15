import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Video } from 'expo-av';
import Chapters from '../screens/Chapters';
import * as Updates from 'expo-updates';
const { width, height } = Dimensions.get('window');

export default class VideoPage5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      status: '',
      quality: '',
      error: '',
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
              onPress={() => this.props.navigation.navigate('Mental')}
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
            </TouchableOpacity>
          </View>
          <StatusBar backgroundColor="#f58084" />
          <Video
           source={require('../images/v5.mp4')}
            rate={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay={false}
            isLooping={false}
            playWhenInactive={false}
            useNativeControls
            style={style.video}
            pictureInPicture={true}
          />
          <Chapters
            color="#fde6e6"
            percent={25}
            duration="6 Min 3 Sec"
            title="Video Lecture"
            num={1}
          />

          <Text
            style={{
              fontFamily: 'dancing2',
              textAlign: 'justify',
              color: '#345c74',
              paddingLeft: 42,
              paddingRight: 35,
            }}>
            Children with learning disabilities like dyslexia and auditory
            processing disorder (APD) struggle with schoolwork regardless of
            their intellectual abilities. They require specialized learning
            strategies to meet their potential and avoid self-esteem problems
            and behavioral difficulties.
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
