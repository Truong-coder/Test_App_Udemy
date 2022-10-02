import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';

/* The Stack Navigator is a little object that decides what content 
 we're going to show on the screen at any given point of time
*/
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen
  },
  {
    // show default screen when start up
    initialRouteName: 'Home', // display the screen when start up
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);