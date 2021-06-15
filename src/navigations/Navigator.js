import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Home from '../screens/Home'
import Cources from '../screens/Cources'
import Xd from '../screens/Xd'
import VideoPage from '../screens/VideoPage'
import Body from '../screens/Body'
import VideoPage2 from '../screens/VideoPage2';
import VideoPage3 from '../screens/VideoPage3';
import VideoPage4 from '../screens/VideoPage4';
import VideoPage5 from '../screens/VideoPage5';
import Intro2 from '../know/Intro2'; 
import Intro3 from '../know/Intro3'; 
import Medic from '../screens/Medic'; 
import Learning from '../screens/Learning';
import Mental from '../screens/Mental'
import Intro4 from '../know/Intro4'; 
import Intro5 from '../know/Intro5'; 
import SettingsScreen from '../screens/SettingsScreen'
const stackNavigatorOptions ={
    headerShown:false
}
const AppNavigator = createStackNavigator({
    VideoPage4:{screen:VideoPage4},
    VideoPage5:{screen:VideoPage5},
    SettingsScreen:{screen:SettingsScreen},
    Home:{screen:Home},
    Cources:{screen:Cources},
    Xd:{screen:Xd},
    VideoPage:{screen:VideoPage},
    Body:{screen:Body},
    VideoPage2:{screen:VideoPage2},
    VideoPage3:{screen:VideoPage3},
    Intro2:{screen:Intro2},
    Intro4:{screen:Intro4},
    Intro5:{screen:Intro5},
    Mental:{screen:Mental},
Medic:{screen:Medic},
Intro3:{screen:Intro3},
Learning:{screen:Learning},
},
{
    defaultNavigationOptions:stackNavigatorOptions
}
)
export default createAppContainer(AppNavigator);