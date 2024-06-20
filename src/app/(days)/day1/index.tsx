//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
// create a component
const DayDeatilsScreen = () => {
    return (
        <View>
      <Stack.Screen options={{ title: 'Day 1' }} />

      <Text style={{ fontFamily: 'AmaticBold', fontSize: 100 }}>
        Day Details Screen pv
      </Text>
    </View>
    );
};



//make this component available to the app
export default DayDeatilsScreen;
