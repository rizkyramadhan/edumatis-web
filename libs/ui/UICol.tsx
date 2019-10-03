import React from "react";
import { View, Dimensions, Text } from "react-native";
import { S } from "./Style";

const width = Dimensions.get("window").width;
export default ({
  size = 12,
  children,
  sizexs,
  sizesm,
  sizemd,
  sizelg,
  sizexl,
  sizexxl
}: {
  size?: number;
  children?: any;
  sizexs?: number;
  sizesm?: number;
  sizemd?: number;
  sizelg?: number;
  sizexl?: number;
  sizexxl?: number;
}) => {
  let current: any = size;

  if (width <= 410) {
    current = sizesm || size;
  } else if (width >= 411 && width <= 567) {
    current = sizesm || size;
  } else if (width >= 568 && width <= 767) {
    current = sizemd || size;
  } else if (width >= 768 && width <= 1023) {
    current = sizelg || size;
  } else if (width >= 1024 && width <= 1279) {
    current = sizexl || size;
  } else if (width >= 1280) {
    current = sizexxl || size;
  }

  return (
    <View
      style={{
        flexBasis: (current / 12) * 100 + "%"
      }}
    >
      {children && children.map && children.length > 1 ? (
        children.map((C: any, i: number) => {
          if (typeof C !== "object") {
            if (typeof C === "string" && C.trim() === "") return null;
            return (
              <Text
                key={i}
                style={S({
                  paddingVertical: 1,
                  marginVertical: 1
                })}
              >
                {C}
              </Text>
            );
          } else {
            return C;
          }
        })
      ) : typeof children === "object" ? (
        children
      ) : (
        <Text>{children}</Text>
      )}
    </View>
  );
};
