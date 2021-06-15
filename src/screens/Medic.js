import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Modalize } from 'react-native-modalize';
import Chapters from '../screens/Chapters';
import Cources from './Cources';
import { Header, Avatar, Icon } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import db from '../config/config';
import firebase from 'firebase';
import auth from '@react-native-firebase/auth';
import * as Updates from 'expo-updates';
export default class Medic extends React.Component {
  state = {
    userId: firebase.auth().currentUser.email,
    image: '#',
    name: '',
    docId: '',
  };
  selectPicture = async () => {
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!cancelled) {
      this.uploadImage(uri, this.state.userId);
    }
  };

  uploadImage = async (uri, imageName) => {
    var response = await fetch(uri);
    var blob = await response.blob();

    var ref = firebase
      .storage()
      .ref()
      .child('user_profiles/' + imageName);

    return ref.put(blob).then((response) => {
      this.fetchImage(imageName);
    });
  };
  fetchImage = (imageName) => {
    var storageRef = firebase
      .storage()
      .ref()
      .child('user_profiles/' + imageName);

    // Get the download URL
    storageRef
      .getDownloadURL()
      .then((url) => {
        this.setState({ image: url });
      })
      .catch((error) => {
        this.setState({ image: '#' });
      });
  };
  getUserProfile() {
    db.collection('user')
      .where('email_id', '==', this.state.userId)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.setState({
            name: doc.data().first_name + ' ' + doc.data().last_name,
            docId: doc.id,
            image: doc.data().image,
          });
        });
      });
  }

  componentDidMount() {
    this.fetchImage(this.state.userId);
    this.getUserProfile();
  }
  render() {
    return (
      <ImageBackground
        source={require('../images/crs.png')}
        style={{ width: '100%', height: '100%' }}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            paddingHorizontal: 20,
          }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Cources')}
            style={{
              paddingHorizontal: 10,
              paddingVertical: 13,
              borderRadius: 10,
              marginTop: 30,
              backgroundColor: '#9a3c7e',
            }}>
            <Image
              source={require('../images/a1.png')}
              style={{ height: 15, width: 20 }}
            />
          </TouchableOpacity>
        </View>
        <Image
          source={require('../images/medic.gif')}
          style={{
            height: 35,
            width: 35,
            alignSelf: 'center',
            marginTop: 20,
            borderRadius: 20,
          }}
        />
        <Text
          style={{
            color: '#FFF',
            fontFamily: 'dancing',
            fontSize: 35,
            width: 200,
            alignSelf: 'center',
            textAlign: 'center',
          }}>
          Medical Support
        </Text>

        <Modalize
          handleStyle={{
            marginTop: 30,
            backgroundColor: '#e9e9e9',
            width: 80,
          }}
          modalStyle={{
            borderTopLeftRadius: 60,
            borderTopRightRadius: 60,
          }}
          alwaysOpen={510}
          scrollViewProps={{ showsVerticalScrollIndicator: false }}>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 30,
              marginTop: 40,
            }}>
             <Avatar
              rounded
              source={{
                uri: this.state.image,
              }}
              size={'medium'}
              onPress={() => this.selectPicture()}
              showEditButton
            />
            <View style={{ marginHorizontal: 20 }}>
              <Text
                style={{
                  color: '#345c74',
                  fontFamily: 'dancing',
                  fontSize: 18,
                }}>
                 {this.state.name}
              </Text>
              <Text
                style={{
                  color: '#f58084',
                  fontFamily: 'dancing2',
                  fontSize: 12,
                }}>
                Happy To See You
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                
                width: 40,
                height: 40,
                borderRadius: 40,
              }}>
              <Image style = {{width:40,height:40}}source={require('../images/profile.gif')} />
            </View>
          </View>
          <View>
            <Chapters
              num={1}
              color="#fde6e6"
              title="Introduction"
              onPress={() => this.props.navigation.navigate('Intro3')}
            />
    
            
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 5,
              backgroundColor: '#fff2f2',
              marginHorizontal: 20,
              paddingVertical: 15,
              alignItems: 'center',
              borderRadius: 10,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#f58084',
                fontFamily: 'dancing',
                fontSize: 18,
                marginRight: 50,
              }}>
              Watch Video Here,
            </Text>
            <TouchableOpacity
              onPress={()=>this.props.navigation.navigate('VideoPage3')}>
              <Image
                source={require('../images/play.png')}
                style={{ height: 40, width: 40 }}
              />
            </TouchableOpacity>
          </View>
        </Modalize>
      </ImageBackground>
    );
  }
}
