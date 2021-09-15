import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.itemRight}>
        <Icon
          name="delete"
          size={30}
          color="#e33057"
          onPress={() => completeTask(index)}
        />
        <View style={styles.circular}></View>
      </View>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  itemRight: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: { maxWidth: "80%" },
  deleteIcon: {
    color: "#d91118",
  },
  circular: {
    width: 15,
    height: 15,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
    marginLeft: 8,
  },
});
