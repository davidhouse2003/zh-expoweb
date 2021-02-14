import '@expo/browser-polyfill';
import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  useEffect(() => {
    console.log("inside App.useEffect()")
   
}, []);
  return (
    <View style={styles.container}>
      <Text>03 zh-expoweb</Text>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
