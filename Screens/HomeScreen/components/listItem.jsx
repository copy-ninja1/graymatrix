import React from "react";
import { View, Text, Image } from "react-native";
import homeStyles from "../home.style";

function ListItem({ title, description }) {
  return (
    <View style={homeStyles.item}>
      <Image
        style={homeStyles.itemImage}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
      <View style={homeStyles.content}>
        <Text style={homeStyles.title}>{title}</Text>
        <Text style={homeStyles.description}>{description}</Text>
      </View>
    </View>
  );
}

export default ListItem;
