import React from 'react'
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import Story from '../components/Story'
import Post from '../components/Post'

const Home = () => {
    return (
        <SafeAreaView style={styles.Container}>
            <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
            <View style={styles.HeaderContainer}>
                <View>
                    <Text style={styles.Title}>Instagram</Text>
                </View>
                <View style={styles.ActionContainer}>
                    <Image style={styles.Action} source={require('../../assets/icons/plus-rectangle.png')} />
                    <Image source={require('../../assets/icons/navigation.png')} />
                </View>
            </View>
            <ScrollView>
                <Story />
                <Post />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    Container: {
        paddingBottom: 50
    },
    HeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    Title: {
        fontSize: 25,
        fontWeight: '600'
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
