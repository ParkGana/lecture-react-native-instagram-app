import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, ScrollView } from 'react-native'
import ProfileBody from '../components/ProfileBody'
import ProfileStory from '../components/ProfileStory'
import ProfilePost from '../components/ProfilePost'

const Profile = () => {
    return (
        <SafeAreaView style={styles.Container}>
            <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
            <View style={styles.HeaderContainer}>
                <View>
                    <Text style={styles.Email}>이메일</Text>
                </View>
                <View style={styles.ActionContainer}>
                    <Image style={styles.Action} source={require('../../assets/icons/plus-rectangle.png')} />
                    <Image source={require('../../assets/icons/menu.png')} />
                </View>
            </View>
            <ProfileBody />
            <ScrollView>
                <ProfileStory />
                <ProfilePost />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile

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
    Email: {
        fontSize: 20,
        fontWeight: '700'
    },
    ActionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    Action: {
        marginRight: 15
    }
})
