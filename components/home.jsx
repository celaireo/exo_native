import React, { useState,useEffect } from 'react';
import { Text, View, ScrollView, TextInput,StyleSheet, Button, Image } from 'react-native';
// import { now,annee,mois,jour, heure,minute,seconde,date,joursemaine,days,months,day,month,globalStyles } from './obs.jsx'
import {date, week, months,fullDate,width,height,globalStyles} from './global.jsx'
import Prevision from './Prevision'

export default function Home (props) {
  
  //---------------------UseState-----------------------//


const apiKey = '8d937ada21412cefa14b958644910f95';
const ville = 'Paris';
const [city, setCity] = useState('');
const [meteoDesc, setMeteoDesc] = useState('');
const [temp, setTemps] = useState('');
const [pays, setPays] = useState('');
const [img, setImg] = useState('');
const [heures, setHeures] = useState('');
const [minutes, setMinutes] = useState('');







  //-----------Appelle de l'API--------------//


useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ville}&APPID=${apiKey}&lang=fr&units=metric`)
    .then(res => res.json())
    .then(data => {
        setCity(data.name);
        setMeteoDesc(data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1));
        setTemps(data.main.temp.toFixed(1));
        setPays(data.sys.country);
        setImg(data.weather[0].icon);

        setInterval(function heure(){
          let h = new Date().getHours();
          h = (h < 10) ? `0${h}` : h;
          setHeures(h);
      }, 600);
      setInterval(function minutes(){
          let min = new Date().getUTCMinutes();
          min = (min < 10) ? `0${min}` : min;
          setMinutes(min);
      }, 100);
      console.log(data)
    });
});

  // //---------------------UseState-----------------------//


  // const [city,setCity] = useState('');
  // const [desc,setDesc] = useState('');
  // const [temp,setTemp] = useState('');
  // const [ico,setIcon] = useState('');
  // const [heures, setHeures] = useState('');
  // const [minutes, setMinutes] = useState('');


 





    return (
        <View > 
            <View style={globalStyles.container}>
            
              <View style={globalStyles.center}>

              </View>
              <Text style={[styles.title]}>{city}</Text>
                        <Image
                        style={{
                        width: 200,
                        height: 200,
                        alignSelf:'center',
                      
                        
                      }}
                        source={{
                        uri: `http://openweathermap.org/img/wn/${img}@2x.png`
                      }}
                      // source={require('./img/Rain.png')}
                      
                     />
             
                <View style={globalStyles.container2}>
                <Text style={[globalStyles.bigTextStart]}>{temp}°</Text>

                  <Text style={globalStyles.smallTitleBold}>{meteoDesc}</Text>
                  <Text style={styles.hour}>Mise à jour {heures}h{minutes} </Text>


                </View>
              <Text style={globalStyles.h1Day}>{fullDate}</Text>
            </View>
            <Prevision/>

        </View>
        
    );
}

const styles = StyleSheet.create({
  
 
  hour:{
    fontSize: 16,
    padding:5,
    backgroundColor:'#99E2FC',
    borderRadius:20,

  },
  title:{
    fontSize:32,
    fontWeight:'bold',
    marginTop:42,
    color:'white',


  }
});

