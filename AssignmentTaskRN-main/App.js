import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { NativeBaseProvider, Box } from "native-base";
import Navigation from './Navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
<NavigationContainer>     
<NativeBaseProvider >
  <SafeAreaView style={styles.container}>
    <Navigation/>
    </SafeAreaView>
  </NativeBaseProvider>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
