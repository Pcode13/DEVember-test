import { View, Text, Pressable, Button ,StyleSheet} from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';

const DayDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Day 2: Onboarding' }} />
      <Text>Day Details Screen</Text>

      <Link href="/day2/onboarding" asChild>
        <Pressable>
          <Text style={{ color: 'blue', fontSize: 16, padding: 10 }}>Go to onboarding</Text>
        </Pressable>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
     
  },
});
export default DayDetailsScreen;
