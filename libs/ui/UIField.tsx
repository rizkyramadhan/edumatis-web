import { S, St } from "@app/libs/ui/Style";
import React from "react";
import { Text, View } from "react-native";

export default ({ label, style, children }: any) => {
  return (
    <View style={S(St.Field, style)}>
      {!!label && (
        <View pointerEvents="none">
          <Text style={S(St.LabelFocus)}>{label}</Text>
        </View>
      )}
      {children}
    </View>
  );
};
