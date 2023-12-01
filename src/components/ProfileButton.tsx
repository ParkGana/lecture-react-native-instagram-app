import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type NavigationPage = {
    EditProfile: undefined
}
const ProfileButton = ({ my }: { my?: boolean }) => {
    const navigation = useNavigation<NativeStackNavigationProp<NavigationPage>>()

    return (
        <>
            {my ? (
                <TouchableOpacity style={styles.ButtonContainer} onPress={() => navigation.push('EditProfile')}>
                    <View style={styles.BasicButton}>
                        <Text style={styles.BasicButtonText}>프로필 수정</Text>
                    </View>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.MultiButtonContainer}>
                    <View style={styles.FollowButton}>
                        <Text style={styles.FollowButtonText}>팔로우</Text>
                    </View>
                    <View style={styles.BasicButton}>
                        <Text style={styles.BasicButtonText}>메시지</Text>
                    </View>
                </TouchableOpacity>
            )}
        </>
    )
}

export default ProfileButton

const styles = StyleSheet.create({
    ButtonContainer: {
        marginHorizontal: 10
    },
    MultiButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10
    },
    FollowButton: {
        width: '49%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '2%',
        borderRadius: 10,
        backgroundColor: '#0584f3'
    },
    FollowButtonText: {
        fontSize: 14,
        fontWeight: '700',
        color: '#ffffff'
    },
    BasicButton: {
        width: '49%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#c5cad2',
        borderRadius: 10
    },
    BasicButtonText: {
        fontSize: 14,
        fontWeight: '700'
    }
})
