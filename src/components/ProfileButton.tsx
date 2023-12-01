import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type NavigationPage = {
    EditProfile: undefined
}
const ProfileButton = () => {
    const navigation = useNavigation<NativeStackNavigationProp<NavigationPage>>()

    return (
        <TouchableOpacity style={styles.ButtonContainer} onPress={() => navigation.push('EditProfile')}>
            <View style={styles.Button}>
                <Text style={styles.ButtonText}>프로필 수정</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ProfileButton

const styles = StyleSheet.create({
    ButtonContainer: {
        marginHorizontal: 10
    },
    Button: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#c5cad2',
        borderRadius: 10
    },
    ButtonText: {
        fontSize: 14,
        fontWeight: '700'
    }
})
