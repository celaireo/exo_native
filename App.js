import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BtnApp from './components/BtnApp';
import Modalite from './components/Modalite';



export default function App() {
  return (
    <Modalite>
    <View style={styles.container}>
      <Text>Hello World !</Text>
      {/* <BtnApp/> */}
         {/* <BtnApp mode="outlined">
                Avec props
         </BtnApp> */}
      
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
