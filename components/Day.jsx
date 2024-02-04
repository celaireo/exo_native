import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {date, week, months,fullDate,width,height,globalStyles} from './global.jsx'


//----------------UseState des items ---------------------//



function Day(props) {

  const meteo = props.item;

  const [date,setDate] = useState('');
  const [heure,setHeure] = useState('');
  const [temp, setTemp] = useState('');
  const [img,setImg] = useState('');
  const [desc,setDesc] = useState('');


//UseEffect avec filtrage des caractères pour l'affichage//



  useEffect(() => {

    setDate(meteo.dt_txt.split(" ")[0]);
    setHeure(meteo.dt_txt.split(" ")[1]);
    setTemp(meteo.main.temp.toFixed(0));
    setImg(meteo.weather[0].icon);
    setDesc(meteo.weather[0].description.charAt(0).toUpperCase() + meteo.weather[0].description.slice(1));

  });
   //-Const pour afficher la date écrite et non numérique-//
   let jour = new Date(date);

  let mois = months[jour.getUTCMonth()];
  let jours = jour.getUTCDate();


  //--------------Front des boites de prévision---------//


  return (
    <View style={styles.previ}>
      <View style={styles.dessin}>
        <Image
          style={styles.ico}
          source={{
          uri: `http://openweathermap.org/img/wn/${img}@2x.png`
        }}/>
        <Text style={styles.intitule}>{desc}</Text>
      </View>
      <View>
        <Text style={styles.day}>{jours} {mois}{"\n"}{heure.substring(0, heure.length - 3)}</Text>
        <Text style={styles.temp}>{temp}°C</Text>
      </View>
    </View>
  );
}
//--------------Style  des boites de prévision---------//
const styles = StyleSheet.create({
  previ: {

    width: width,
    height: 100,
    marginTop: 25,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  dessin: {
    marginRight: '25%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  intitule: {
    color: 'white',
    fontSize: 18
  },
  ico: {
    width: 100,
    height: 75,
    //   borderWidth: 4,   borderColor: "#20232a",
  },
  day: {
    color: 'white',
    fontSize: 16
  },
  temp: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: "center"
  }
});

export default Day;