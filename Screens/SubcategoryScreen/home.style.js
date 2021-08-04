import { StyleSheet } from "react-native";

const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: "white",
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        flexShrink: 1,
        borderRadius: 8,
    },
    content: {
        paddingLeft: 10,
        flex: 1,
        flexShrink: 1,
    },
    itemImage: {
        width: 60,
        height: 60,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
    },
    description: {
        fontSize: 16,
    },
});
export default homeStyles