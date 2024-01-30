// screens/LoginScreen.jsx
import React, { useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Nouvel état pour le chargement

  const handleLogin = () => {
    // Commencez le chargement
    setLoading(true);

    // Logique de connexion
    console.log('Email:', email);
    console.log('Mot de passe:', password);

    // Simulez une tâche asynchrone, par exemple, une requête réseau
    setTimeout(() => {
      // Arrêtez le chargement après la tâche asynchrone (simulée)
      setLoading(false);

      // Rediriger vers le tableau de bord (dashboard) après la connexion
      navigation.navigate('Dashboard');
    }, 2000); // Simulation d'une tâche asynchrone de 2 secondes
  };

  const handleSignup = () => {
    // Rediriger vers la page d'inscription
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
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

      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Se connecter
      </Button>

      <Button onPress={handleSignup} style={styles.signupButton}>
        S'inscrire
      </Button>

      {loading && <ActivityIndicator size="large" color="#0000ff" />} {/* Indicateur d'activité */}
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
  signupButton: {
    marginTop: 10,
  },
});

export default LoginScreen;
