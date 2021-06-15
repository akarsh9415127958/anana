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

export default class Intro2 extends React.Component {
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
          <Chapters
            color="#fde6e6"
            percent={25}
            duration="9 Min 3 Sec"
            title="Body Development"
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
            Children with special needs are about twice as likely as other
            children to be overweight or obese often due to the related greater
            likelihood of being sedentary. Some conditions, such as cerebral
            palsy, increase the difficulty in eating thus leading to underweight
            but others, such as Down syndrome, may contribute to overeating and
            overweight or obesity. However, the general trend of obesity in
            children with disabilities is much greater than underweight. Nearly
            20% of all children and adolescents have a chronic condition or
            disability (National Center on Physical Activity and Disability),
            and the levels of participation in recreational or school sport, and
            physical activity programs are much lower than their non-disabled
            counterparts. It is therefore critical that all children with
            disabilities engage in healthy eating and regular, adequate physical
            activity. These children, as much or more, than other students must
            learn what about the steps to leading a healthy lifestyle, often
            within the context of the abilities and limitations of their
            respective conditions.
          </Text>
        </ScrollView>
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
