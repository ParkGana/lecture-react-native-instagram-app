import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import BottomTab from './src/components/BottomTab'
import DetailStory from './src/screens/DetailStory'

export default function App() {
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Bottom" component={BottomTab} />
                <Stack.Screen name="DetailStory" component={DetailStory} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
