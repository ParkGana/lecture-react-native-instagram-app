import { Animated, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const DetailStory = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()

    const progress = useRef(new Animated.Value(0)).current

    const progressAnimation = progress.interpolate({
        inputRange: [0, 5],
        outputRange: ['0%', '100%']
    })

    // 5초 경과 시 이전 페이지로 돌아가기
    useEffect(() => {
        let timer = setTimeout(() => {
            navigation.goBack()
        }, 5000)

        return () => {
            clearTimeout(timer)
        }
    }, [])

    useEffect(() => {
        Animated.timing(progress, {
            toValue: 5,
            duration: 5000,
            useNativeDriver: false
        }).start()
    }, [])

    return (
        <SafeAreaView style={styles.Container}>
            <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
            <View style={styles.AnimationContainer}>
                <Animated.View style={{ width: progressAnimation, height: '100%', backgroundColor: '#c13584' }} />
            </View>
            <View style={styles.ItemContainer}>
                <View style={styles.HeaderContainer}>
                    <View style={styles.ProfileContainer}>
                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/images/example-profile.png')}
                                style={styles.ProfileImage}
                            />
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.ProfileText}>이름</Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Image source={require('../../assets/icons/close.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.ImageContainer}>
                    <Image source={require('../../assets/images/example-post.png')} style={styles.Image} />
                </View>
                <View />
            </View>
        </SafeAreaView>
    )
}

export default DetailStory

const styles = StyleSheet.create({
    Container: {
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    AnimationContainer: {
        height: 10,
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: '#ffffff',
        backgroundColor: '#c5cad2'
    },
    ItemContainer: {
        height: '100%',
        justifyContent: 'space-between'
    },
    HeaderContainer: {
        paddingHorizontal: 10,
        paddingTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    ProfileContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ProfileImage: {
        width: 40,
        height: 40,
        marginRight: 10,
        borderRadius: 20,
        backgroundColor: '#c5cad2'
    },
    ProfileText: {
        fontSize: 15,
        fontWeight: '600',
        lineHeight: 20
    },
    ImageContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    Image: {
        width: '100%'
    }
})
