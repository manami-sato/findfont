import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { Provider, Subscribe } from 'unstated'

import CounterContainer from './container/fontContainer'

//import screens
// import Default from './screens/Default';
import Index from './screens/Index';
import Camera from './screens/Camera';
import Test from './screens/Test';
import Result from './screens/Result'
import { color } from 'react-native-reanimated';

// rooting
const RootStack = createStackNavigator(
  {
    home: {
      screen: Index,
      navigationOptions: {
        title: 'ホーム',
        headerStyle: {
          backgroundColor: '#639CBF'
        },
        headerTintColor: '#fff'
      }
    },
    Details: {
      screen: Test,
      navigationOptions: {
        title: 'スキャン',
        component: { StackScreen },
        headerStyle: {
          backgroundColor: '#639CBF'
        },
        headerTintColor: '#fff',
      }
    },
    Result: {
      screen: Result,
      navigationOptions: {
        title: 'スキャン結果',
        component: { StackScreen },
        headerStyle: {
          backgroundColor: '#639CBF'
        },
        headerTintColor: '#fff',
        cardStyle: {
          backgroundColor: '#fff'
        },
      }
    },
  },
  {
    initialRouteName: 'home',
  }
)

function StackScreen() { }

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    let globalState = new CounterContainer();
    return (
      <Provider inject={[globalState]}>
        <AppContainer />
      </Provider>
    )
  }
}