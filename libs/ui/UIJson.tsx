import React from "react";
import { View, Text } from "react-native";

export default ({ data }: any) => {
  return (
    <View>
      <Text>{JSON.stringify(data, null, 4).replace(/\{\}/gi, "")}</Text>
    </View>
  );
};
