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

export default class VideoPage2 extends React.Component {
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
              onPress={() => this.props.navigation.navigate('Body')}
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
            source={require('../images/v4.mp4')}
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
            Developmental disabilities can change your visions of the future and
            provide immediate difficulties in caring for and educating your
            child. Diagnoses like autism, Down syndrome, and intellectual
            disabilities often cause children to be removed from the mainstream.
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
