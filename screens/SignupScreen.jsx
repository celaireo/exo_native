// screens/SignupScreen.jsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const SignupScreen = ({ navigation }) => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Logique d'inscription
    console.log('Nom:', nom);
    console.log('Prénom:', prenom);
    console.log('Email:', email);
    console.log('Mot de passe:', password);

    // Rediriger vers le tableau de bord (dashboard) après l'inscription
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Nom"
        value={nom}
        onChangeText={(text) => setNom(text)}
        mode="outlined"
        style={styles.input}
      />

      <TextInput
        label="Prénom"
        value={prenom}
        onChangeText={(text) => setPrenom(text)}
        mode="outlined"
        style={styles.input}
      />

      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        mode="outlined"
        style={styles.input}
      />

      <TextInput
        label="Mot de passe"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        mode="outlined"
        style={styles.input}
      />

      <Button mode="contained" onPress={handleSignup} style={styles.button}>
        S'inscrire
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 20,
  },
});

export default SignupScreen;
