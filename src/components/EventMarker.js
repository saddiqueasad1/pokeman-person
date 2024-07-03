import React from 'react';
import { Marker } from 'react-native-maps';
import { View, Text, Image, StyleSheet } from 'react-native';

const EventMarker = ({ event, onPress }) => {
  return (
    <Marker
      coordinate={{ latitude: event.location.latitude, longitude: event.location.longitude }}
      onPress={() => onPress(event)}
    >
      <View style={styles.marker}>
        <Image
          source={{ uri: event.image }}
          style={styles.image}
        />
        <View style={[ { backgroundColor: event.shadow_color }]} />
        <Text style={styles.pokemonText}>{event.pokemon_present}k</Text>
      </View>
    </Marker>
  );
};

const styles = StyleSheet.create({
  marker: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },
  shadow: {
    position: 'absolute',
    top: 5,
    left: 5,
    width: 60,
    height: 60,
    borderRadius: 30,
    opacity: 0.5,
  },
  pokemonText: {
    position: 'absolute',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default EventMarker;
