import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>Fancy Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <Image source={{ uri: 'https://images.pexels.com/photos/28672757/pexels-photo-28672757/free-photo-of-two-ducks-swimming-among-autumn-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' }} style={styles.cardImage} />
                <View><Text style={styles.cardBody}>Birds</Text></View>
            </View>
            <View style={[styles.card, styles.elevatedCard]}>
                <Image source={{ uri: 'https://images.pexels.com/photos/28672757/pexels-photo-28672757/free-photo-of-two-ducks-swimming-among-autumn-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' }} style={styles.cardImage} />
                <View><Text style={styles.cardBody}>Birds</Text></View>
            </View>
            <View style={[styles.card, styles.elevatedCard]}>
                <Image source={{ uri: 'https://images.pexels.com/photos/28672757/pexels-photo-28672757/free-photo-of-two-ducks-swimming-among-autumn-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' }} style={styles.cardImage} />
                <View><Text style={styles.cardBody}>Birds</Text></View>
            </View>
            <View style={[styles.card, styles.elevatedCard]}>
                <Image source={{ uri: 'https://images.pexels.com/photos/28672757/pexels-photo-28672757/free-photo-of-two-ducks-swimming-among-autumn-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' }} style={styles.cardImage} />
                <View><Text style={styles.cardBody}>Birds</Text></View>
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
    card: {
        backgroundColor: '#74B9FF',
        borderRadius: 20,
        padding: 8,
        margin: 2,
    },
    elevatedCard: {
        elevation: 4,
    },
    cardImage: {
        height: 200,
        margin: 8,
        padding: 5,
        borderRadius: 8,
    },
    cardBody: {
        color: '#1e272e',
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold'

    },
})