import { S, St } from "@app/libs/ui/Style";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import UIButton from "./UIButton";
import UIModal from "./UIModal";

export default observer(function({
  setValue,
  value,
  items = [],
  label,
  fieldStyle,
  fieldActiveStyle,
  inputStyle = S(St.TextInput),
  inputProps,
  showTitle = false
}: any) {
  const [itemSelected, setItemSelected] = useState();
  const [internalValue, setInternalValue] = useState();
  const [focused, setFocused] = useState(false);
  const SLabel = !!value || !!internalValue ? St.LabelFocus : St.LabelHidden;
  return (
    <TouchableOpacity
      onPress={() => {
        setFocused(true);
      }}
    >
      <View
        style={
          focused
            ? S(S(St.Field, fieldStyle), S(St.FieldActive, fieldActiveStyle))
            : S(St.Field, fieldStyle)
        }
      >
        {!!label && (
          <Text style={focused ? S(St.LabelFocus, St.LabelActive) : SLabel}>
            {label}
          </Text>
        )}
        <View style={St.Select2}>
          <Text style={S(St.SelectLabel, itemSelected && St.SelectLabelActive)}>
            {(!!itemSelected && itemSelected.label) || label}
          </Text>
          <Text style={St.SelectIcon}>▼</Text>
        </View>
        <UIModal
          present={focused}
          setPresent={setFocused}
          modalProps={{
            onRequestClose: () => {}
          }}
        >
          <View style={St.ModalView}>
            {showTitle && (
              <View style={S(St.ModalHeader, St.SelectHeader)}>
                <Text
                  style={{
                    width: "90%",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    color: "#000"
                  }}
                >
                  {label}
                </Text>
                <UIButton
                  size="small"
                  fill="clear"
                  buttonProps={{ onPress: () => setFocused(false) }}
                  labelStyle={{ color: "red" }}
                  style={{ alignItems: "flex-end", justifyContent: "flex-end" }}
                >
                  ✕
                </UIButton>
              </View>
            )}
            <View style={St.ModalContent}>
              <ScrollView style={St.SelectList}>
                {items.map((item: any, idx: number) => {
                  const value = typeof item !== "string" ? item.value : item;
                  const label = typeof item !== "string" ? item.label : item;
                  return (
                    <UIButton
                      key={idx}
                      style={S(
                        St.SelectItem,
                        idx === 0 && {
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10
                        },
                        idx === items.length - 1 && {
                          borderBottomWidth: 0,
                          borderBottomLeftRadius: 10,
                          borderBottomRightRadius: 10
                        }
                      )}
                      labelStyle={St.SelectItemLabel}
                      buttonProps={{
                        onPress: () => {
                          if (setValue) setValue(value);

                          setItemSelected({
                            value,
                            label
                          });
                          setInternalValue(value);
                          setFocused(false);
                        }
                      }}
                    >
                      {label}
                    </UIButton>
                  );
                })}
              </ScrollView>
            </View>
          </View>
        </UIModal>
      </View>
    </TouchableOpacity>
  );
});
