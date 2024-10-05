import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContectList() {
    const contacts = [
        {
            "name": "Alice Johnson",
            "phone": "+1-202-555-0123"
        },
        {
            "name": "Bob Smith",
            "phone": "+1-202-555-0456"
        },
        {
            "name": "Charlie Brown",
            "phone": "+1-202-555-0789"
        },
        {
            "name": "Diana Prince",
            "phone": "+1-202-555-1011"
        },
        {
            "name": "Ethan Hunt",
            "phone": "+1-202-555-1213"
        },
        {
            "name": "Fiona Gallagher",
            "phone": "+1-202-555-1415"
        },
        {
            "name": "George Costanza",
            "phone": "+1-202-555-1617"
        },
        {
            "name": "Hannah Baker",
            "phone": "+1-202-555-1819"
        },
        {
            "name": "Ivy League",
            "phone": "+1-202-555-2021"
        },
        {
            "name": "Jack Sparrow",
            "phone": "+1-202-555-2223"
        }
    ]
    return (
        <View>
            <Text style={styles.headingText}>ContectList</Text>
            <ScrollView style={styles.container} scrollEnabled={false}>
                {contacts.map((c, i) => (
                    <View key={i} style={styles.userCard}>
                        <Text style={styles.userText}>{c.name}</Text>
                        <Text style={styles.userPhone}>{c.phone}</Text>
                    </View>
                ))}
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
        margin: 8,
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        padding: 4,
        backgroundColor: "#EE5A24",
        margin: 5,
    },
    userText: {
        fontSize: 20,
        padding: 4,
        color: '#130f40'
    },
    userPhone: {
        marginTop: 8,
        marginLeft: 8,
        fontSize: 16,
        color: '#130f40',
    }
})