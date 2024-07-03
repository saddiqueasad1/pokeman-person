import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const DiamondImage = ({ uri }) => {
  return (
    <View style={styles.container}>
      <View style={styles.diamond}>
        <Image source={{ uri }} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  diamond: {
    width: 60,
    height: 60,
    borderRadius: 20, // Adjust the radius as needed
    overflow: 'hidden',
    transform: [{ rotate: '-50deg' }],
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20, // Same radius as diamondContainer to make corners round
  },
});

export default DiamondImage;
