import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import ActivityHistory from '../components/ActivityHistory'
import ActivityRecommend from '../components/ActivityRecommend'

const Activity = () => {
    return (
        <SafeAreaView style={styles.Container}>
            <Text style={styles.Title}>활동</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.CategoryContainer}>
                    <Text style={styles.SubTitle}>이전 활동</Text>
                    <ActivityHistory />
                </View>
                <View style={styles.CategoryContainer}>
                    <Text style={styles.SubTitle}>회원님을 위한 추천</Text>
                    <ActivityRecommend />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Activity

const styles = StyleSheet.create({
    Container: {
        paddingBottom: 50
    },
    Title: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        fontSize: 25,
        fontWeight: '600'
    },
    CategoryContainer: {
        marginVertical: 10,
        paddingHorizontal: 10
    },
    SubTitle: {
        fontSize: 15,
        fontWeight: '600',
        paddingVertical: 5
    }
})
