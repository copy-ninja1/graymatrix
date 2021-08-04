import React from "react";
import { SafeAreaView, FlatList, Text } from "react-native";
import ListItem from "./components/listItem";
import homeStyles from "./home.style";
import listItemData from "./listData";

function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <ListItem title={item.title} description={item.description} />
  );

  return (
    <SafeAreaView style={homeStyles.container}>
      <Text
        style={{
          fontSize: 26,
          marginLeft: 15,
          marginTop: 10,
          fontWeight: "500",
        }}
      ></Text>
      <FlatList
        data={listItemData}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
