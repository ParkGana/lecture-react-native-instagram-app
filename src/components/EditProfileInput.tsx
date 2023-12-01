import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const EditProfileInput = () => {
    return (
        <View style={styles.Container}>
            <View style={styles.ItemContainer}>
                <Text style={styles.Text}>이름</Text>
                <TextInput style={styles.Input} placeholder={'이름'} />
            </View>
            <View style={styles.ItemContainer}>
                <Text style={styles.Text}>사용자 이름</Text>
                <TextInput style={styles.Input} placeholder={'사용자 이름'} />
            </View>
            <View style={styles.ItemContainer}>
                <Text style={styles.Text}>웹사이트</Text>
                <TextInput style={styles.Input} placeholder={'웹사이트'} />
            </View>
            <View style={styles.ItemContainer}>
                <Text style={styles.Text}>소개</Text>
                <TextInput style={styles.Input} placeholder={'소개'} />
            </View>
        </View>
    )
}

export default EditProfileInput

const styles = StyleSheet.create({
    Container: {
        marginHorizontal: 10
    },
    ItemContainer: {
        marginVertical: 10
    },
    Text: {
        opacity: 0.5,
        marginBottom: 5
    },
    Input: {
        fontSize: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#c5cad2'
    }
})
