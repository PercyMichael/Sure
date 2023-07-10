import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Marker, Callout } from "react-native-maps";

const Maps = () => {
  const onMapReady = async () => {
    if (mapInitialized) {
      return;
    }

    // initialize map data here

    setMapInitialized(true);
  };

  return (
    <View styles={{ flex: 1 }}>
      <Text>Mapsjjj</Text>
      <MapView
        mapType="mutedStandard"
        initialRegion={{
          latitude: 0.375972,
          longitude: 32.636528,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
        onLayout={onMapReady}
      >
        <Marker
          coordinate={{
            latitude: 0.375972,
            longitude: 32.636528,
          }}
          image={require("../assets/mapmarker.png")}
          title="Test"
          description="Arrival in 5 minutes"
        >
          <Callout tooltip>
            <View>
              <View style={styles.bubble}>
                <Text style={styles.name}>Nearest Agent</Text>
                {/* <Text>Coming in 5 minutes</Text> */}
                <Image
                  style={{ width: 40, height: 40, borderRadius: 75 }}
                  source={require("../assets/profileimage/profile.jpg")}
                />
              </View>
              <View style={styles.arrowBorder} />
            </View>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
};

export default Maps;

const styles = StyleSheet.create({
  map: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    flex: 1,
  },
});
