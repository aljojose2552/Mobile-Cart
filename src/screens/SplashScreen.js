import React from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import logo from './image/logo1.png';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={logo} // Use the imported local image
        style={styles.logo}
      />
      {/* App Name */}
      <Text style={styles.appName}>Mobile Mart</Text>
      {/* Loader */}
      <ActivityIndicator size="large" color="#008000" style={styles.loader} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Light grey background
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 12, // Rounded corners for the logo
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#008000', // Green color for the app name
    marginBottom: 20,
  },
  loader: {
    marginTop: 10,
  },
});

export default SplashScreen;
