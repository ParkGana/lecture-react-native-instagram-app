import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type NavigationPage = {
    EditProfile: undefined
}

const ProfileBody = () => {
    const navigation = useNavigation<NativeStackNavigationProp<NavigationPage>>()

    return (
        <View>
            <View style={styles.ItemContainer}>
                <View style={styles.AccountContainer}>
                    <View style={styles.ProfileContainer}>
                        <Image source={require('../../assets/images/example-profile.png')} style={styles.Image} />
                        <Text style={styles.Name}>이름</Text>
                    </View>
                    <View style={styles.InformationContainer}>
                        <Text style={styles.Text}>100</Text>
                        <Text style={styles.Title}>게시물</Text>
                    </View>
                    <View style={styles.InformationContainer}>
                        <Text style={styles.Text}>100</Text>
                        <Text style={styles.Title}>팔로워</Text>
                    </View>
                    <View style={styles.InformationContainer}>
                        <Text style={styles.Text}>100</Text>
                        <Text style={styles.Title}>팔로잉</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.ButtonContainer} onPress={() => navigation.push('EditProfile')}>
                    <View style={styles.Button}>
                        <Text style={styles.ButtonText}>프로필 수정</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProfileBody

const styles = StyleSheet.create({
    ItemContainer: {
        marginVertical: 10
    },
    AccountContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 10
    },
    ProfileContainer: {
        alignItems: 'center'
    },
    Image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 5
    },
    Name: {},
    InformationContainer: {
        alignItems: 'center'
    },
    Title: {
        fontSize: 15,
        fontWeight: '500'
    },
    Text: {
        fontSize: 18,
        fontWeight: '600'
    },
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
