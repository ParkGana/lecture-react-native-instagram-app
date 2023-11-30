import React from 'react'
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

const Story = () => {
    return (
        <ScrollView style={styles.Container} horizontal={true} showsHorizontalScrollIndicator={false}>
            {[...Array(10)].map((number, index) => (
                <TouchableOpacity key={index}>
                    <View style={styles.ItemContainer}>
                        {index === 0 && (
                            <View style={styles.IconContainer}>
                                <Image source={require('../../assets/icons/plus-circle.png')} style={styles.Icon} />
                            </View>
                        )}
                        <View style={styles.ImageContainer}>
                            <Image source={require('../../assets/images/example-profile.png')} style={styles.Image} />
                        </View>
                        <Text style={styles.Text}>이름</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}

export default Story

const styles = StyleSheet.create({
    Container: {
        paddingVertical: 10
    },
    ItemContainer: {
        position: 'relative',
        flexDirection: 'column',
        paddingHorizontal: 10
    },
    IconContainer: {
        position: 'absolute',
        bottom: 20,
        right: 10,
        zIndex: 1
    },
    Icon: {
        width: 20,
        height: 20
    },
    ImageContainer: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#c13584',
        borderRadius: 35
    },
    Image: {
        width: '90%',
        height: '90%',
        backgroundColor: '#c5cad2',
        borderRadius: 35
    },
    Text: {
        paddingTop: 5,
        fontSize: 10,
        textAlign: 'center'
    }
})
