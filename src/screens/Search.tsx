import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, StatusBar } from 'react-native'
import SearchInput from '../components/SearchInput'
import SearchContent from '../components/SearchContent'

const Search = () => {
    return (
        <SafeAreaView style={styles.Container}>
            <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <SearchInput />
                <SearchContent />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Search

const styles = StyleSheet.create({
    Container: {
        paddingBottom: 50
    }
})
