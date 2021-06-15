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

import Chapters from '../screens/Chapters';

const { width, height } = Dimensions.get('window');

export default class Intro4 extends React.Component {
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

          <Chapters
            color="#fde6e6"
            percent={25}
            duration="9 Min 3 Sec"
            title="Mental Health"
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
            Realizing that your child suffers from anxiety or depression or has
            attachment difficulties can be unexpected. Again, every child will
            be different, yet these can leave your family dealing with a roller
            coaster of mood swings, crises, and defiance. It's important that
            parents find the right professionals to help. You will also need to
            make decisions about therapy, medications, and, possibly,
            hospitalization.
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
