import React from 'react';
import { Text, View, ScrollView, TextInput,StyleSheet, Button } from 'react-native';
import Home from './components/Home' 
import './components/router'


import TabNavigator from './components/router';

// import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import Prevision from './components/Prevision';



export default function Login (props) {
    return (
        

    
    //  <NavigationContainer>
    //   <TabNavigator/>
    // </NavigationContainer>
    
    <View style={styles.container}>

    <Home/>
    {/* <Prevision/> */}
  </View>
        
    );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  title: {
      padding: 8,
      fontSize: 28,
      fontWeight: 'bold',
  },
  label: {
      padding: 6,
      fontSize: 20,
  },
  boxInput:{
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#000000',
    minWidth:100,
    minHeight:20,
  },
});

