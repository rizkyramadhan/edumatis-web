import { S, St } from "@app/libs/ui/Style";
import React, { useState } from "react";
import { Picker, Text, View } from "react-native";

export default ({
  setValue,
  value,
  items,
  label,
  style,
  fieldActiveStyle,
  inputStyle = S(St.TextInput),
  inputProps
}: any) => {
  const [temp, setTemp] = useState();
  const [focused, setFocused] = useState(false);
  const SLabel = !!value || !!temp ? St.LabelFocus : St.SelectLabel;

  return (
    <View
      style={
        focused
          ? S(S(St.Field, style), S(St.FieldActive, fieldActiveStyle))
          : S(St.Field, style)
      }
    >
      {!!label && (
        <Text style={S(St.LabelFocus, { marginLeft: 10 })}>{label}</Text>
      )}
      <Picker
        mode="dialog"
        style={{ marginVertical: 5 }}
        selectedValue={value || temp}
        onValueChange={(itemValue, itemIndex) =>
          setValue != undefined ? setValue(itemValue) : setTemp(itemValue)
        }
      >
        {items.map((item: any, index: number) => {
          if (typeof item === "string")
            return <Picker.Item key={index} label={item} value={item} />;

          return (
            <Picker.Item key={index} label={item.label} value={item.value} />
          );
        })}
      </Picker>
    </View>
  );
};
