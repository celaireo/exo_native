import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BtnApp from './components/BtnApp';
import Modalite from './components/Modalite';
import HomeScreen from './screen/home.screen';


export default function App() {
  return (
    <Modalite>
    <View style={styles.container}>
      <Text>Hello World !</Text>
      {/* <BtnApp/> */}
         {/* <BtnApp mode="outlined">
                Avec props
         </BtnApp> */}
        
        <HomeScreen/>
      <StatusBar style="auto" />
    </View>
    </Modalite>
    
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
