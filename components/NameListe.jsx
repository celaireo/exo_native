import React from 'react';
import { View, Text, List } from 'react-native-paper';

const NameListe = () => {
  const names = [
    { prenom: 'Devin' },
    { prenom: 'Dan' },
    { prenom: 'Dominic' },
    { prenom: 'Jackson' },
    { prenom: 'James' },
    { prenom: 'Joel' },
    { prenom: 'John' },
    { prenom: 'Jillian' },
    { prenom: 'Jimmy' },
    { prenom: 'Julie' },
  ];

  return (
    
      <List.Section>
        {names.map((item, index) => (
          <List.Item key={index} title={item.prenom} />
        ))}
      </List.Section>
    
  );
};

export default NameListe;
