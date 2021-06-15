import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {Header} from 'react-native-elements';
import { TextComponent } from 'react-native';
import auth from '@react-native-firebase/auth';
import firebase from 'firebase';
import db from '../config/config';
export default class SettingsScreen extends Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      firstName: '',
      lastName: '',
      address: '',
      contact: '',
      docId: '',
    };
  }
  getUserDetails = () => {
    var email = firebase.auth().currentUser.email;
    db.collection('users')
      .where('email_id', '==', email)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          var data = doc.data();
          this.setState({
            emailId: data.email_id,
            firstName: data.first_name,
            lastName: data.last_name,
            address: data.address,
            contact: data.contact,
            docId: doc.id,
          });
        });
      });
  };
  updateUserDetails = () => {
    db.collection('user').doc(this.state.docId).update({
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      address: this.state.address,
      contact: this.state.contact,
    });
    alert('Profile Updated Successfully');
  };
  componentDidMount() {
    this.getUserDetails();
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="PROFILE SCREEN " />
        <View style={styles.formContainer}>
          <TextInput
            style={styles.formTextInput}
            placeholder={'firstName'}
            maxLength={8}
            onChangeText={(Text) =>
              this.setState({
                firstName: Text,
              })
            }
            value={this.state.firstName}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder={'lastName'}
            maxLength={8}
            onChangeText={(Text) =>
              this.setState({
                lastName: Text,
              })
            }
            value={this.state.lastName}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder={'contact'}
            maxLength={10}
            keyboardType={'numeric'}
            onChangeText={(Text) =>
              this.setState({
                contact: Text,
              })
            }
            value={this.state.contact}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder={'address'}
            multiline={true}
            onChangeText={(Text) =>
              this.setState({
                address: Text,
              })
            }
            value={this.state.address}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={(Text) => {
              this.updateUserDetails();
            }}
          >
          <Text style={styles.buttonText}>Save</Text>
       </TouchableOpacity> </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formTextInput: {
    width: '75%',
    height: 35,
    alignSelf: 'center',
    borderColor: 'red',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
  },
  button: {
    width: '75%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'aqua',
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'brown',
  },
});
