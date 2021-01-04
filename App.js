import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ComponentsScreen from './src/screens/ComponentsScreen';
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import SquareScreen2 from './src/screens/SquareScreen2';
import CounterScreen2 from './src/screens/CounterScreen2';
import TextScreen from './src/screens/TextScreen';
import BoxObject from './src/screens/BoxObject';
import Flexmodel from './src/screens/Flexmodel';



const navigator = createStackNavigator(

  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Square2: SquareScreen2,
    Counter2: CounterScreen2,
    Text: TextScreen,
    Box: BoxObject,
    Flex: Flexmodel
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: " My React App"
    }
  }
);

export default createAppContainer(navigator);
