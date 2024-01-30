// components/CoffeeLogo.jsx
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const CoffeeLogo = () => {
  const logoSource = require('./../assets/cafe_logo.jpeg');

  return (
    <View style={styles.logoContainer}>
      <Image source={logoSource} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default CoffeeLogo;
