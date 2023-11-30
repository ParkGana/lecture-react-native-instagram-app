import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import BottomTab from './src/components/BottomTab'

export default function App() {
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Bottom" component={BottomTab} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
