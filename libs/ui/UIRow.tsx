import React from "react";
import { View } from "react-native";

export default (props: any) => {
  return (
    <View style={{ ...props.style, flexDirection: "row", flexWrap: "wrap" }}>
      {props.children}
    </View>
  );
};
