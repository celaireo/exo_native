import React, {useState, useEffect} from 'react';
import { Text, View, ScrollView, TextInput,StyleSheet, Button, Image,FlatList } from 'react-native';
// import {date, week, months,fullDate,width,height,globalStyles} from './global.jsx'
import Day from './Day'





export default function Prevision () {


  const apiKey = '8d937ada21412cefa14b958644910f95';
  const ville = 'Paris';
  
  const [meteo,setMeteo] = useState('');
  
  
  //------------APPELLE DEUXIEME API----------------------//
  
  
  useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${ville}&appid=${apiKey}&lang=fr&units=metric`)
      .then(res => res.json())
      .then(meteo => {
        setMeteo(meteo);
      })
  });





    return (
      <View style={styles.contain}>

      <ScrollView style={styles.container}>
      <Text style={styles.titre}>Prévision sur 5 jours
        </Text>
        
        <View style={styles.containerInfo}>
          <FlatList
            data={meteo.list}
            renderItem={({item}) => {
            return (<Day item={item}/>)
          }}
            keyExtractor={item => item.dt}/>
        </View>

      </ScrollView>
      </View>


    );
    

}

const styles = StyleSheet.create({
  contain: {
    flex: 2  

  },
  container: {
    borderWidth:1,
    borderColor:'white',
    backgroundColor:'black',
  },

  titre: { 
    alignSelf:'center',
    padding: 0,
    color: 'white',
    fontSize: 32,
    marginTop: 20
  }
});

