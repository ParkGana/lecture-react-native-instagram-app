import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

const ActivityHistory = () => {
    return (
        <View>
            {[...Array(10)].map((number, index) => (
                <TouchableOpacity style={styles.ItemContainer} key={index}>
                    <View style={styles.ContentContainer}>
                        <Image
                            source={require('../../assets/images/example-profile.png')}
                            style={styles.ProfileImage}
                        />
                        <Text style={styles.Text}>가나님이 회원님의 게시글을 좋아합니다.</Text>
                    </View>
                    <Image source={require('../../assets/images/example-post.png')} style={styles.ContentImage} />
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default ActivityHistory

const styles = StyleSheet.create({
    ItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    ContentContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ProfileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10
    },
    Text: {
        fontSize: 13,
        fontWeight: '500',
        lineHeight: 15
    },
    ContentImage: {
        width: 40,
        height: 40
    }
})
