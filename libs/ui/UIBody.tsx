import React from "react";
import { ScrollView, View } from "react-native";

export default ({ children, style }: any) => {
  let CustomTag: any = ScrollView;
  let CustomStyle: any = {
    paddingVertical: 10,
    paddingHorizontal: 25
  };
  React.Children.forEach(children, (child, index) => {
    if (index === 0 && child.type.name === "UIList") {
      CustomTag = View;
      CustomStyle = {};
    }
  });

  return (
    <CustomTag
      style={{
        flex: 1,
        ...CustomStyle,
        ...style
      }}
    >
      {children}
    </CustomTag>
  );
};
