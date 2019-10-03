import React from "react";
import { TouchableOpacity, View, Dimensions } from "react-native";
const width = Dimensions.get("window").width;

export default (props: { onPress: any; children?: any; style?: any }) => {
  const style =
    width >= 568 ? { paddingHorizontal: 15 } : { paddingHorizontal: 10 };
  return (
    <View
      style={{
        ...style,
        ...props.style,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1
      }}
    >
      <TouchableOpacity
        style={{
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
        }}
        onPress={props.onPress}
      >
        {props.children}
      </TouchableOpacity>
    </View>
  );
};
