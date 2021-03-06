import React, { useEffect, useState, useRef } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { S, St } from "@app/libs/ui/Style";

export default ({
  setValue,
  value = "",
  sublabel,
  label,
  style,
  fieldActiveStyle,
  inputStyle = S(St.TextInput),
  inputProps,
  onBlur,
  type = "string"
}: any) => {
  const [internalValue, setInternalValue] = useState(value);
  const [focused, setFocused] = useState(false);
  const ref: any = useRef(null);
  const SLabel = !!value || !!internalValue ? St.LabelFocus : St.Label;

  return (
    <View
      style={
        focused
          ? S(St.Field, St.FieldActive, fieldActiveStyle, style)
          : S(St.Field, style)
      }
    >
      {!!label && (
        <View pointerEvents="none">
          <Text style={focused ? S(St.LabelFocus, St.LabelActive) : SLabel}>
            {label}
          </Text>
        </View>
      )}
      <TextInput
        ref={ref}
        secureTextEntry={type === "password"}
        onFocus={() => setFocused(true)}
        onBlur={() => {
          setFocused(false);
          if (typeof onBlur === "function") {
            onBlur();
          }
        }}
        style={inputStyle}
        onChangeText={text => {
          if (setValue != undefined) setValue(text);
          setInternalValue(text);
        }}
        value={value.toString()}
        {...inputProps}
      />
      {!!sublabel && <Text style={St.SubLabel}>{sublabel}</Text>}
    </View>
  );
};
