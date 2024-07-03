import React from "react";
import { Marker } from "react-native-maps";
import { View, Text } from "react-native";
import { Avatar } from "react-native-elements";

const UserMarker = ({ user }) => {
  return (
    <Marker coordinate={{ latitude: user.latitude, longitude: user.longitude }}>
      <View style={{ alignItems: "center" }}>
        <Avatar
          rounded
          source={{ uri: user.image }}
          size="medium"
          containerStyle={{
            borderWidth: 3,
            borderColor: "#fff",
            marginBottom: 5,
          }}
        />
        <Text style={{ color: "#fff", fontSize: 10 }}>{user.name}</Text>
      </View>
    </Marker>
  );
};

export default UserMarker;
