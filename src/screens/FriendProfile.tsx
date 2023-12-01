import React from 'react'
import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import FriendProfileRecommend from '../components/FriendRecommend'
import ProfileBody from '../components/ProfileBody'
import ProfileButton from '../components/ProfileButton'
import ProfilePost from '../components/ProfilePost'

const FriendProfile = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()

    return (
        <SafeAreaView style={styles.Container}>
            <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
            <View style={styles.HeaderContainer}>
                <View style={styles.ActionContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../assets/icons/back.png')} />
                    </TouchableOpacity>
                    <Text style={styles.Name}>이름</Text>
                </View>
                <Image source={require('../../assets/icons/more.png')} />
            </View>
            <ProfileBody />
            <ProfileButton />
            <ScrollView>
                <FriendProfileRecommend />
                <ProfilePost />
            </ScrollView>
        </SafeAreaView>
    )
}

export default FriendProfile

const styles = StyleSheet.create({
    Container: {
        paddingBottom: 50
    },
    HeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    Name: {
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 30,
        marginLeft: 10
    },
    ActionContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})
