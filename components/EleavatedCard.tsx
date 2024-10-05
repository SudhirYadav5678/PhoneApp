import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EleavatedCard = () => {
    return (
        <View>
            <Text style={styles.headingText}>Eleavated Card</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.elevatedCard]}><Text>1</Text></View>
                <View style={[styles.card, styles.elevatedCard]}><Text>2</Text></View>
                <View style={[styles.card, styles.elevatedCard]}><Text>3</Text></View>
                <View style={[styles.card, styles.elevatedCard]}><Text>4</Text></View>
                <View style={[styles.card, styles.elevatedCard]}><Text>5</Text></View>
                <View style={[styles.card, styles.elevatedCard]}><Text>6</Text></View>
                <View style={[styles.card, styles.elevatedCard]}><Text>7</Text></View>
                <View style={[styles.card, styles.elevatedCard]}><Text>8</Text></View>
            </ScrollView>
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
    container: {
        padding: 8
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,
    },
    elevatedCard: {
        backgroundColor: '#CAD5E2',
        elevation: 4,
    }
})

export default EleavatedCard

