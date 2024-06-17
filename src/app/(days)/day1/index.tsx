//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
// create a component
const DayDeatilsScreen = () => {
    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: 'Day 1' }} />
            <Text>DayDeatilsScreen</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default DayDeatilsScreen;
