import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList, ActivityIndicator } from 'react-native';
import DayListItem from '../components/core/DayListItem';
import {  useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from '@expo-google-fonts/amatic-sc';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
const days= [...Array(24)].map((val, index) => index + 1);


SplashScreen.preventAutoHideAsync();
export default function HomeScreen() {
  const [fontsLoaded,fontError]= useFonts({
    Inter:Inter_900Black,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold,
  })

  useEffect(()=>{
    if (!fontsLoaded && !fontError) {
      SplashScreen.hideAsync();
    }
  })
  if (!fontsLoaded && !fontError) {
    return <ActivityIndicator/>;
  }
  return (
    <View style={styles.container}>
       <FlatList
        data={days}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        renderItem={({ item }) => <DayListItem day={item} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  content: {
    gap: 10,
    padding: 10,
  },
  column: {
    gap: 10,
  }
});
