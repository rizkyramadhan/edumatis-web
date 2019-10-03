import { St } from "@app/libs/ui/Style";
import React from "react";
import { View } from "react-native";

export default function({
  children,
  present = false,
  setPresent,
  modalProps
}: any) {
  if (!present) return <View />;
  return <View style={St.Modal}>{children}</View>;
}
