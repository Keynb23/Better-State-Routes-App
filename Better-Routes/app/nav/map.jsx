import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

// This is a placeholder for the main map view of the application.
export default function MapScreen() {
    return (
        <View style={styles.container}>
            {/* Header/Title Area */}
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Route Map</Text>
            </View>
            
            {/* Map Area Placeholder */}
            <View style={styles.mapPlaceholder}>
                <Text style={styles.mapText}>[Interactive Map View Placeholder]</Text>
                <Text style={styles.mapSubText}>Displaying current routes and job locations...</Text>
            </View>
        </View>
    );
}

// --- Stylesheet ---
const styles = StyleSheet.create({
    // Main container filling the entire screen
    container: {
        flex: 1,
        backgroundColor: '#fff', 
    },
    // Container for the screen header
    headerContainer: {
        paddingTop: 50,
        paddingBottom: 20,
        backgroundColor: '#0c2e56', // Deep Navy Blue
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4,
    },
    // Text style for the main header title
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    // Placeholder view for the map component
    mapPlaceholder: {
        flex: 1,
        backgroundColor: '#e0e0e0', // Light grey background for map area
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    // Text style indicating the map placeholder
    mapText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
    },
    // Subtext describing the map purpose
    mapSubText: {
        fontSize: 14,
        color: '#666',
    },
});
