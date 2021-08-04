import React from "react";
import { View, Text, Image } from "react-native";
import homeStyles from "../../HomeScreen/home.style";

function ListItem({ title, description }) {
  return (
    <View style={homeStyles.item}>
      <View style={homeStyles.content}>
        <Text style={homeStyles.title}>{description}</Text>
      </View>
    </View>
  );
}

export default ListItem;
