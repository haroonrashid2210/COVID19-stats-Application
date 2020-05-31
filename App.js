import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Components/Home'
import Stats from './Components/Stats'
import Summary from './Components/Summary'

const Drawer = createDrawerNavigator();
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Summary" component={Summary} />
          <Drawer.Screen name="Stats" component={Stats} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
};
