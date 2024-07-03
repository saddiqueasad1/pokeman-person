import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import MapView from "react-native-maps";

const EventDetailsScreen = ({ route }) => {
  const { event } = route.params;
  const tokyoRegion = {
    latitude: 35.6762,
    longitude: 139.6503,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={tokyoRegion}
        userInterfaceStyle="dark"
      ></MapView>
      <Image source={{ uri: event.image }} style={styles.image} />
      <Text style={styles.title}>{event.name}</Text>
      <Text>Attendees: {event.pokemon_present}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default EventDetailsScreen;
