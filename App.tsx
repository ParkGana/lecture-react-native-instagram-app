import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import BottomTab from './src/components/BottomTab'
import DetailStory from './src/screens/DetailStory'
import EditProfile from './src/screens/EditProfile'
import FriendProfile from './src/screens/FriendProfile'

export default function App() {
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Bottom" component={BottomTab} />
                <Stack.Screen name="DetailStory" component={DetailStory} />
                <Stack.Screen name="EditProfile" component={EditProfile} />
                <Stack.Screen name="FriendProfile" component={FriendProfile} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
