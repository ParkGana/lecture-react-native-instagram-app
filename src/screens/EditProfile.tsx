import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import EditProfileInput from '../components/EditProfileInput'

const EditProfile = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()

    return (
        <SafeAreaView>
            <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
            <View style={styles.ActionContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text>취소</Text>
                </TouchableOpacity>
                <Text style={styles.TitleText}>프로필 수정</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.DoneText}>완료</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.ProfileContainer}>
                <Image source={require('../../assets/images/example-profile.png')} style={styles.ProfileImage} />
                <Text style={styles.ProfileText}>프로필 사진 바꾸기</Text>
            </View>
            <EditProfileInput />
            <View>
                <Text style={styles.Button}>프로페셔널 계정으로 전환</Text>
                <Text style={styles.Button}>개인정보 설정</Text>
            </View>
        </SafeAreaView>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    ActionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    TitleText: {
        fontSize: 16,
        fontWeight: '700'
    },
    DoneText: {
        color: '#0584f3'
    },
    ProfileContainer: {
        alignItems: 'center',
        marginVertical: 10
    },
    ProfileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10
    },
    ProfileText: {
        color: '#0584f3'
    },
    Button: {
        margin: 10,
        color: '#0584f3'
    }
})
