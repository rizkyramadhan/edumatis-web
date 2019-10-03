import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import UIImage from "./UIImage";
import { useObservable, observer } from "mobx-react-lite";
import { ResponsiveHandler, Responsive } from "./Style";

export default observer(({ title, children, onBack, navigation }: any) => {
  const obs: any = useObservable({});
  useEffect(ResponsiveHandler(obs), []);

  const sideBtnStyle = {};
  const viewStyle = {
    paddingVertical: 15,
    paddingHorizontal: 25,
    flexBasis: 75,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  };
  return (
    <View
      style={Responsive(
        {
          xs: { ...viewStyle, paddingRight: 0 },
          sm: { ...viewStyle, paddingRight: 0 },
          md: { ...viewStyle },
          lg: { ...viewStyle },
          xl: { ...viewStyle },
          xxl: { ...viewStyle }
        },
        obs.width
      )}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {navigation && !onBack && (
          <TouchableOpacity
            style={Responsive(
              {
                xs: { ...sideBtnStyle },
                sm: { ...sideBtnStyle },
                md: { ...sideBtnStyle, display: "none" },
                lg: { ...sideBtnStyle, display: "none" },
                xl: { ...sideBtnStyle, display: "none" },
                xxl: { ...sideBtnStyle, display: "none" }
              },
              obs.width
            )}
            onPress={() => {
              if (navigation.toggleDrawer) {
                navigation.toggleDrawer();
              } else {
                const parent = navigation.dangerouslyGetParent();
                if (parent.toggleDrawer) {
                  parent.toggleDrawer();
                }
              }
            }}
          >
            <UIImage
              style={{
                width: 20,
                height: 20,
                marginLeft: -5,
                marginRight: 20
              }}
              source={require("@app/libs/ui/imgs/line-menu.png")}
            />
          </TouchableOpacity>
        )}

        {onBack && (
          <TouchableOpacity
            style={{
              width: 20,
              height: 20,
              marginLeft: -10,
              marginRight: 10,
              marginTop: 3
            }}
            onPress={onBack}
          >
            <UIImage
              style={{
                width: 20,
                height: 20
              }}
              source={require("@app/libs/ui/imgs/back.png")}
            />
          </TouchableOpacity>
        )}
        <Text
          style={{ fontSize: 22, color: "#555", flex: 1, flexWrap: "wrap" }}
        >
          {(title || "").trim()}
        </Text>
      </View>
      <View>{children}</View>
    </View>
  );
});
