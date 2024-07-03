import React from "react";
import { Marker } from "react-native-maps";
import { View, Text } from "react-native";
import { Avatar } from "react-native-elements";
import DiamondImage from "./DiamondImage";

const UserMarker = ({ user }) => {
  return (
    <Marker coordinate={{ latitude: user.latitude, longitude: user.longitude }}>
      <View style={{ alignItems: "center" }}>
        {/* <Avatar
          rounded = {false}
          source={{ uri: user.image }}
          size="medium"
          containerStyle={{
            borderWidth: 3,
            borderColor: "#fff",
            marginBottom: 5,
          }}
        /> */}
        <DiamondImage uri={user.image}/>
      </View>
    </Marker>
  );
};

export default UserMarker;
