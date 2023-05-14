import { View, Text, SafeAreaView, StatusBar, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';

const Stack = createNativeStackNavigator();

function Main() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Group>
                    <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Main;
