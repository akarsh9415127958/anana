import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import AppIntroSlider from "react-native-app-intro-slider";
import AppNavigator from './src/navigations/Navigator'
import WelcomeScreen from './src/screens/WelcomeScreen';
import * as Updates from 'expo-updates';
export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async loadFonts() {
    await Font.loadAsync({
  
      dancing: require('./src/fonts/dancing.ttf'),

    
      'dancing2': {
        uri: require('./src/fonts/dancing2.ttf'),
        display: Font.FontDisplay.FALLBACK,
      },
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
  
    if (this.state.fontsLoaded) {
      return (
        <AppContainer/>
      );
    } else {
      return null;
    }
  }
}
const appNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen}, 
    AppNavigator:{screen: AppNavigator}
  })
  const AppContainer =  createAppContainer(appNavigator);



