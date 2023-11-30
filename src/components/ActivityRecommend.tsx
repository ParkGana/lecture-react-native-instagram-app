import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

const ActivityRecommend = () => {
    return (
        <View>
            {[...Array(10)].map((number, index) => (
                <View style={styles.ItemContainer} key={index}>
                    <TouchableOpacity style={styles.ProfileContainer}>
                        <Image
                            source={require('../../assets/images/example-profile.png')}
                            style={styles.ProfileImage}
                        />
                        <View>
                            <Text style={styles.NameText}>이름</Text>
                            <Text style={styles.RecommendText}>회원님을 위한 추천</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.ActionContainer}>
                        <TouchableOpacity>
                            <View style={styles.Button}>
                                <Text style={styles.ButtonText}>팔로우</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../assets/icons/close.png')} style={styles.Icon} />
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </View>
    )
}

export default ActivityRecommend

const styles = StyleSheet.create({
    ItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    ProfileContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ProfileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10
    },
    NameText: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 5
    },
    RecommendText: {
        fontSize: 12,
        opacity: 0.5
    },
    ActionContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    Button: {
        paddingHorizontal: 10,
        paddingVertical: 7,
        marginRight: 10,
        backgroundColor: '#0584f3',
        borderRadius: 5
    },
    ButtonText: {
        fontSize: 13,
        color: '#ffffff'
    },
    Icon: {
        width: 10,
        height: 10,
        opacity: 0.5
    }
})
