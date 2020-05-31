import React, { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator, FlatList } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import { Card } from 'react-native-elements';


function AfricaScreen() {
    const [getData, setData] = useState();
    const [isLoading, setLoading] = useState(true);

    const getAPIData = () => {
        return fetch('http://covid19-update-api.herokuapp.com/api/v1/world/continent/africa')
            .then((response) => response.json())
            .then((responseJson) => {
                setLoading(false);
                setData(responseJson.countries);
            })
    }

    useEffect(() => {
        getAPIData();
    });

    if (isLoading) {
        return (
            <View style={{ flex: 1, padding: 20 }}>
                <ActivityIndicator size="large" />
                <Text>Loading Data from JSON Placeholder API ...</Text>
            </View>
        )
    } else {
        return (
            <View>
                <FlatList
                    data={getData}
                    renderItem={({ item }) => (
                        <Card
                            title={item.name}
                            containerStyle={{ margin: 20, borderRadius: 10 }}
                        >
                            <Text style={{ textAlign: "center", fontSize: 15 }}>{'Cases : ' + item.cases + '\t\t\t\t\tDeaths : ' + item.deaths}</Text>
                        </Card>
                    )}
                />
            </View>
        );
    }
}

function EuropeScreen() {
    const [getData, setData] = useState();
    const [isLoading, setLoading] = useState(true);

    const getAPIData = () => {
        return fetch('http://covid19-update-api.herokuapp.com/api/v1/world/continent/europe')
            .then((response) => response.json())
            .then((responseJson) => {
                setLoading(false);
                setData(responseJson.countries);
            })
    }

    useEffect(() => {
        getAPIData();
    });

    if (isLoading) {
        return (
            <View style={{ flex: 1, padding: 20 }}>
                <ActivityIndicator size="large" />
                <Text>Loading Data from JSON Placeholder API ...</Text>
            </View>
        )
    } else {
        return (
            <View>
                <FlatList
                    data={getData}
                    renderItem={({ item }) => (
                        <Card
                            title={item.name}
                            containerStyle={{ margin: 20, borderRadius: 10 }}
                        >
                            <Text style={{ textAlign: "center", fontSize: 15 }}>{'Cases : ' + item.cases + '\t\t\t\t\tDeaths : ' + item.deaths}</Text>
                        </Card>
                    )}
                />
            </View>
        );
    }
}

function NorthAmericaScreen() {
    const [getData, setData] = useState();
    const [isLoading, setLoading] = useState(true);

    const getAPIData = () => {
        return fetch('http://covid19-update-api.herokuapp.com/api/v1/world/continent/north%20america')
            .then((response) => response.json())
            .then((responseJson) => {
                setLoading(false);
                setData(responseJson.countries);
            })
    }

    useEffect(() => {
        getAPIData();
    });

    if (isLoading) {
        return (
            <View style={{ flex: 1, padding: 20 }}>
                <ActivityIndicator size="large" />
                <Text>Loading Data from JSON Placeholder API ...</Text>
            </View>
        )
    } else {
        return (
            <View>
                <FlatList
                    data={getData}
                    renderItem={({ item }) => (
                        <Card
                            title={item.name}
                            containerStyle={{ margin: 20, borderRadius: 10 }}
                        >
                            <Text style={{ textAlign: "center", fontSize: 15 }}>{'Cases : ' + item.cases + '\t\t\t\t\tDeaths : ' + item.deaths}</Text>
                        </Card>
                    )}
                />
            </View>
        );
    }
}
function SouthAmericaScreen() {
    const [getData, setData] = useState();
    const [isLoading, setLoading] = useState(true);

    const getAPIData = () => {
        return fetch('http://covid19-update-api.herokuapp.com/api/v1/world/continent/south%20america')
            .then((response) => response.json())
            .then((responseJson) => {
                setLoading(false);
                setData(responseJson.countries);
            })
    }

    useEffect(() => {
        getAPIData();
    });

    if (isLoading) {
        return (
            <View style={{ flex: 1, padding: 20 }}>
                <ActivityIndicator size="large" />
                <Text>Loading Data from JSON Placeholder API ...</Text>
            </View>
        )
    } else {
        return (
            <View>
                <FlatList
                    data={getData}
                    renderItem={({ item }) => (
                        <Card
                            title={item.name}
                            containerStyle={{ margin: 20, borderRadius: 10 }}
                        >
                            <Text style={{ textAlign: "center", fontSize: 15 }}>{'Cases : ' + item.cases + '\t\t\t\t\tDeaths : ' + item.deaths}</Text>
                        </Card>
                    )}
                />
            </View>
        );
    }
}
function AsiaScreen() {
    const [getData, setData] = useState();
    const [isLoading, setLoading] = useState(true);

    const getAPIData = () => {
        return fetch('http://covid19-update-api.herokuapp.com/api/v1/world/continent/asia')
            .then((response) => response.json())
            .then((responseJson) => {
                setLoading(false);
                setData(responseJson.countries);
            })
    }

    useEffect(() => {
        getAPIData();
    });

    if (isLoading) {
        return (
            <View style={{ flex: 1, padding: 20 }}>
                <ActivityIndicator size="large" />
                <Text>Loading Data from JSON Placeholder API ...</Text>
            </View>
        )
    } else {
        return (
            <View>
                <FlatList
                    data={getData}
                    renderItem={({ item }) => (
                        <Card
                            title={item.name}
                            containerStyle={{ margin: 20, borderRadius: 10 }}
                        >
                            <Text style={{ textAlign: "center", fontSize: 15 }}>{'Cases : ' + item.cases + '\t\t\t\t\tDeaths : ' + item.deaths}</Text>
                        </Card>
                    )}
                />
            </View>
        );
    }
}

function AustraliaScreen() {
    const [getData, setData] = useState();
    const [isLoading, setLoading] = useState(true);

    const getAPIData = () => {
        return fetch('http://covid19-update-api.herokuapp.com/api/v1/world/continent/africa')
            .then((response) => response.json())
            .then((responseJson) => {
                setLoading(false);
                setData(responseJson.countries);
            })
    }

    useEffect(() => {
        getAPIData();
    });

    if (isLoading) {
        return (
            <View style={{ flex: 1, padding: 20 }}>
                <ActivityIndicator size="large" />
                <Text>Loading Data from JSON Placeholder API ...</Text>
            </View>
        )
    } else {
        return (
            <View>
                <FlatList
                    data={getData}
                    renderItem={({ item }) => (
                        <Card
                            title={item.name}
                            containerStyle={{ margin: 20, borderRadius: 10 }}
                        >
                            <Text style={{ textAlign: "center", fontSize: 15 }}>{'Cases : ' + item.cases + '\t\t\t\t\tDeaths : ' + item.deaths}</Text>
                        </Card>
                    )}
                />
            </View>
        );
    }
}

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Africa' || route.name === 'Europe' || route.name === 'Australia' || route.name === 'Asia' || route.name === 'South' || route.name === 'North') {
                        iconName = focused
                            ? 'globe-africa'
                            : 'globe-africa';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#5DADE2   ',
                inactiveTintColor: 'grey',
            }}
        >
            <Tab.Screen name="Africa" component={AfricaScreen} options={{ HeaderTitle: 'walkh' }} />
            <Tab.Screen name="Europe" component={EuropeScreen} />
            <Tab.Screen name="North" component={NorthAmericaScreen} />
            <Tab.Screen name="South" component={SouthAmericaScreen} />
            <Tab.Screen name="Asia" component={AsiaScreen} />
            <Tab.Screen name="Australia" component={AustraliaScreen} />
        </Tab.Navigator>
    );
}