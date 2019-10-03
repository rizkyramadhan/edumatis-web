import React from "react";
import { View } from "react-native";

export default ({ children }: any) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column"
      }}
    >
      {children}
    </View>
  );
};
