import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openLink(websiteLink: string) {
        Linking.openURL(websiteLink);
    }
    return (
        <View>
            <Text style={styles.headingText}>ActionCard</Text>
            <View style={styles.card}>
                <Text style={styles.headingText}>Hello</Text>
                <TouchableOpacity onPress={() => openLink('https://images.pexels.com/photos/27750569/pexels-photo-27750569/free-photo-of-model-in-black-tube-top-and-leggings-holding-her-hat.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load')}><Image source={{ uri: 'https://images.pexels.com/photos/27750569/pexels-photo-27750569/free-photo-of-model-in-black-tube-top-and-leggings-holding-her-hat.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' }} style={styles.imageCard} /></TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        color: '#1e272e',
        fontSize: 24,
        marginTop: 4,
        paddingHorizontal: 8,
        fontWeight: 'bold'
    },
    card: {},
    imageCard: {
        height: 200,
        margin: 8,
    }
})