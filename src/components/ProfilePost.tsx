import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'

const screenWidth = Dimensions.get('window').width

const ProfilePost = () => {
    return (
        <View style={styles.Container}>
            {[...Array(5)].map((number, index) => (
                <TouchableOpacity style={styles.ItemContainer} key={index}>
                    <Image source={require('../../assets/images/example-post.png')} style={styles.Image} />
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default ProfilePost

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    ItemContainer: {
        width: screenWidth / 3,
        height: screenWidth / 3,
        borderWidth: 1,
        borderColor: '#ffffff'
    },
    Image: {
        width: '100%',
        height: '100%'
    }
})
