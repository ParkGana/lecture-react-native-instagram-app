import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ProfileStory = () => {
    return (
        <ScrollView style={styles.Container} horizontal={true} showsHorizontalScrollIndicator={false}>
            {[...Array(10)].map((number, index) => (
                <TouchableOpacity key={index}>
                    <View style={styles.ItemContainer}>
                        {index === 0 ? (
                            <View style={styles.AddContainer}>
                                <Image source={require('../../assets/icons/plus.png')} style={styles.Icon} />
                            </View>
                        ) : (
                            <View style={styles.ImageContainer}>
                                <Image source={require('../../assets/images/example-post.png')} style={styles.Image} />
                            </View>
                        )}
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}

export default ProfileStory

const styles = StyleSheet.create({
    Container: {
        paddingVertical: 30
    },
    ItemContainer: {
        flexDirection: 'column',
        paddingHorizontal: 10
    },
    AddContainer: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#333333',
        borderRadius: 35
    },
    Icon: {},
    ImageContainer: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35
    },
    Image: {
        width: '100%',
        height: '100%',
        backgroundColor: '#c5cad2',
        borderRadius: 35
    },
    Text: {
        paddingTop: 5,
        fontSize: 10,
        textAlign: 'center'
    }
})
