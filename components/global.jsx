// import React, { useState } from 'react';
import {StyleSheet,Dimensions} from 'react-native';
export{date, week, months,fullDate}

//--Const pour afficher la date écrite et non numérique-//

export var width = Dimensions.get('window').width; //full width
export var height = Dimensions.get('window').height; //full height



let date = new Date();
  
const week = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi"
];
const months = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre"
];
let fullDate = `${week[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;





export const globalStyles = StyleSheet.create({
       

    // ------------------style texte------------------------
      h1Day:{
        fontSize:32,
        color:'white',
      },
      smallTitleBold: {
        fontSize: 28,
        fontWeight: 'bold',
        color:'white',

    },
      bigTextStart:{
        fontSize: 42,
        color:'white',

    
      },
      


    //  ---------------style placement----------------------

      center:{
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
      },
      container2: {
        alignItems:'baseline',
      },



    //  ----------------style box----------------------------


      container: {
        backgroundColor:'#000000',
        padding:10,
        borderRadius:5,
        flex:4,
        width:width,
      },

      
      weatherBox:{
        flexDirection:'row',
        borderWidth:2,
        borderColor:'red',
      
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

    //   --------------------------------------------
});