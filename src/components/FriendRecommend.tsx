import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'

const FriendRecommend = () => {
    return (
        <ScrollView style={styles.Container} horizontal={true} showsHorizontalScrollIndicator={false}>
            {[...Array(10)].map((number, index) => (
                <View style={styles.ItemContainer} key={index}>
                    <TouchableOpacity style={styles.IconContainer}>
                        <Image source={require('../../assets/icons/close.png')} style={styles.Icon} />
                    </TouchableOpacity>
                    <Image source={require('../../assets/images/example-profile.png')} style={styles.Image} />
                    <Text style={styles.Text}>이름</Text>
                    <TouchableOpacity>
                        <View style={styles.ButtonContainer}>
                            <Text style={styles.ButtonText}>팔로우</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
    )
}

export default FriendRecommend

const styles = StyleSheet.create({
    Container: {
        paddingVertical: 10
    },
    ItemContainer: {
        width: 160,
        height: 200,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderWidth: 1,
        borderColor: '#c5cad2'
    },
    IconContainer: {
        position: 'absolute',
        top: 10,
        right: 10
    },
    Icon: {},
    Image: {
        width: 80,
        height: 80,
        margin: 10,
        borderRadius: 40
    },
    Text: {
        fontSize: 15,
        fontWeight: '600'
    },
    ButtonContainer: {
        width: 100,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#0584f3',
        marginTop: 10
    },
    ButtonText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#ffffff'
    }
})
