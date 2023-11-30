import React from 'react'
import { StyleSheet, Image, View, TextInput } from 'react-native'

const SearchInput = () => {
    return (
        <View style={styles.Container}>
            <Image source={require('../../assets/icons/search.png')} style={styles.Icon} />
            <TextInput style={styles.Input} placeholder={'검색어를 입력해 주세요.'} />
        </View>
    )
}

export default SearchInput

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        padding: 10,
        backgroundColor: '#dddddd',
        borderRadius: 10
    },
    Icon: {
        marginRight: 10
    },
    Input: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15,
        paddingHorizontal: 5
    }
})
