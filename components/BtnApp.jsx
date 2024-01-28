import React from 'react';
import { Button } from 'react-native-paper';

const BtnApp = (props) => {
    
    const handlePress = () => {
        console.log("helllloo");
    }

    return (
        
        <Button 
            mode = {props.mode || "contained"}  // Utilisez la valeur fournie ou "contained" par défaut
            onPress = {handlePress}>

            {props.children || "Press me sans props"}  {/* Utilisez le texte fourni ou "Press me" par défaut */}
        </Button>
    );
};

export default BtnApp;