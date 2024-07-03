import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import UserMarker from "../components/UserMarker";
import EventMarker from "../components/EventMarker";
import events from "../../data/event_house.json";
import mapStyle from "../../data/mapstyle";
import users from "../../data/users.json";

const MapScreen = ({ navigation }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventPress = (event) => {
    setSelectedEvent(event);
    navigation.navigate("EventDetails", { event });
  };
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
        customMapStyle={mapStyle}
        initialRegion={tokyoRegion}
        userInterfaceStyle="dark"
      >
        {events.map((event) => (
          <EventMarker
            key={event.id}
            event={event}
            onPress={handleEventPress}
          />
        ))}
        {users.map((user, index) => (
          <UserMarker key={user.id} user={user} index={index} />
        ))}
      </MapView>
      {selectedEvent && <View style={styles.eventDetails}></View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  eventDetails: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 200,
    backgroundColor: "white",
  },
});

export default MapScreen;
