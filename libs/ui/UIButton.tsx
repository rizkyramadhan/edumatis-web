import { S, St } from "@app/libs/ui/Style";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default ({
  children,
  icon,
  iconMode = "start",
  expand = "block",
  fill = "solid",
  size,
  style,
  labelStyle,
  buttonProps = {},
  onPress
}: any) => {
  const btnExpand: string =
    "Button" + expand.charAt(0).toUpperCase() + expand.slice(1).toLowerCase();
  const btnFIll: any =
    "Button" + fill.charAt(0).toUpperCase() + fill.slice(1).toLowerCase();
  const labelClear: any =
    fill == "outline" || fill == "clear"
      ? "ButtonLabelClear"
      : "ButtonLabelSolid";
  style = S(St.Button, (St as any)[btnExpand], (St as any)[btnFIll], style);

  const defaultLabelStyle = S(
    St.ButtonLabel,
    (St as any)[labelClear],
    size == "small" && St.ButtonLabelSmall,
    size == "large" && St.ButtonLabelLarge
  );
  if (children.length === 1 || typeof children === "string") {
    labelStyle = S(defaultLabelStyle, labelStyle);
  }

  return (
    <TouchableOpacity onPress={onPress} {...buttonProps} style={style}>
      {icon && iconMode == "start" && <Text>{icon}</Text>}
      {children.map && children.length > 1 ? (
        <View style={S(labelStyle, { paddingVertical: 10 })}>
          {children.map((C: any, i: number) => {
            if (typeof C !== "object") {
              if (typeof C === "string" && C.trim() === "") return null;
              return (
                <Text
                  key={i}
                  style={S(defaultLabelStyle, {
                    paddingVertical: 1,
                    marginVertical: 1,
                    lineHeight: "auto"
                  })}
                >
                  {C}
                </Text>
              );
            } else {
              return C;
            }
          })}
        </View>
      ) : (
        <Text style={labelStyle}>{children}</Text>
      )}
      {icon && iconMode == "end" && <Text>{icon}</Text>}
    </TouchableOpacity>
  );
};
