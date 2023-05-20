import { View, Text, SafeAreaView, StatusBar, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import ProductDetails from './screens/ProductDetails';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

const Stack = createNativeStackNavigator();

function Main() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Group>
                    <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
                    <Stack.Screen name="productDetails" component={ProductDetails} options={{ headerShown: false }} />
                </Stack.Group>
            </Stack.Navigator>
            <Toast position='bottom' bottomOffset={20}/>
        </NavigationContainer>
    );
}

export default Main;
