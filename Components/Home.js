import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './SearchScreen';
import CountryScreen from './CountryScreen';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';

export default class Home extends React.Component {
    render() {
        const Stack = createStackNavigator();
        return (
            <Stack.Navigator>
                <Stack.Screen name="Search" component={SearchScreen} options={{
                    title: 'Home', headerLeft: () => (
                        <Button
                            onPress={() => { this.props.navigation.openDrawer() }}
                            icon={<Icon name={'menu'} size={25} />}
                            buttonStyle={{ backgroundColor: 'white', marginLeft: 8 }}
                        />
                    )
                }} />
                <Stack.Screen name="Country Detail" component={CountryScreen} options={{
                    title: 'Country', headerLeft: () => (
                        <Button
                            onPress={() => { this.props.navigation.openDrawer() }}
                            icon={<Icon name={'menu'} size={25} />}
                            buttonStyle={{ backgroundColor: 'white', marginLeft: 8 }}
                        />
                    )
                }} />
            </Stack.Navigator>
        );
    }
}
