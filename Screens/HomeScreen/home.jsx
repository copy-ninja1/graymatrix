import React from "react";
import { SafeAreaView, FlatList, Text, TouchableOpacity } from "react-native";
import ListItem from "./components/listItem";
import homeStyles from "./home.style";
import listItemData from "./listData";

function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate("category")}>
      <ListItem title={item.title} description={item.description} />
    </TouchableOpacity>
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
      >
        Welcome
      </Text>
      <FlatList
        data={listItemData}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
