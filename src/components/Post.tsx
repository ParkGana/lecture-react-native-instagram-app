import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type NavigationPage = {
    FriendProfile: undefined
}
const Post = () => {
    const navigation = useNavigation<NativeStackNavigationProp<NavigationPage>>()

    return (
        <View>
            {[...Array(10)].map((number, index) => (
                <View style={styles.ItemContainer} key={index}>
                    <View style={styles.HeaderContainer}>
                        <View style={styles.ProfileContainer}>
                            <TouchableOpacity onPress={() => navigation.push('FriendProfile')}>
                                <Image
                                    source={require('../../assets/images/example-profile.png')}
                                    style={styles.ProfileImage}
                                />
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.ProfileText}>이름</Text>
                            </View>
                        </View>
                        <Image source={require('../../assets/icons/more.png')} />
                    </View>
                    <View style={styles.ImageContainer}>
                        <Image source={require('../../assets/images/example-post.png')} style={styles.Image} />
                    </View>
                    <View style={styles.ActionContainer}>
                        <View style={styles.IconContainer}>
                            <TouchableOpacity>
                                <Image source={require('../../assets/icons/heart.png')} style={styles.Icon} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={require('../../assets/icons/chat.png')} style={styles.Icon} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={require('../../assets/icons/navigation.png')} />
                            </TouchableOpacity>
                        </View>
                        <Image source={require('../../assets/icons/bookmark.png')} />
                    </View>
                    <View style={styles.ContentContainer}>
                        <Text style={styles.LikeText}>좋아요 100개</Text>
                        <Text style={styles.ContentText}>게시글 설명</Text>
                        <Text style={styles.CommentText}>댓글 모두 보기</Text>
                    </View>
                </View>
            ))}
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    ItemContainer: {
        paddingBottom: 20
    },
    HeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    ProfileContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ProfileImage: {
        width: 40,
        height: 40,
        marginRight: 5,
        backgroundColor: '#c5cad2',
        borderRadius: 20
    },
    ProfileText: {
        fontSize: 15,
        fontWeight: '500',
        lineHeight: 20
    },
    ImageContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    Image: {
        width: '100%',
        height: 400
    },
    ActionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    IconContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    Icon: {
        marginRight: 10
    },
    ContentContainer: {
        paddingHorizontal: 10
    },
    LikeText: {
        fontSize: 12
    },
    ContentText: {
        fontSize: 14,
        fontWeight: '600',
        marginVertical: 5
    },
    CommentText: {
        opacity: 0.5,
        marginVertical: 5
    }
})
