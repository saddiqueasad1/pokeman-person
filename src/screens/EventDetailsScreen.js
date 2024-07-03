import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const EventDetailsScreen = ({ route }) => {
  const { event } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: event.image }} style={styles.image} />
      <Text style={styles.title}>{event.name}</Text>
      <Text>Attendees: {event.pokemon_present}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default EventDetailsScreen;
