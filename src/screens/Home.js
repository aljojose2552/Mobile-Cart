import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import image from './image/image.png';
import p2 from './image/p2.png';
import p3 from './image/p3.png';


const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Welcome to Mobile Mart</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Buy and sell mobiles effortlessly. Discover great deals or list your phone for sale today!
      </Text>

      {/* Image Container */}

      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
        <Image source={p2} style={styles.image} />
        <Image source={p3} style={styles.image} />
      </View>


   
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#008000',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 180,
    borderRadius: 12,
    margin: 10,
    backgroundColor: '#ddd',
  },
});

export default Home;
