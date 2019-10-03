import { observer, useObservable } from "mobx-react-lite";
import React, { useEffect, useRef } from "react";
import { TouchableOpacity, View } from "react-native";
import { Responsive, ResponsiveHandler } from "../ui/Style";
import NavContainer from "./NavContainer";

const absoluteSideBar = {
  position: "absolute",
  left: 0,
  top: 0,
  bottom: 0,
  width: "30%",
  flexDirection: "row",
  alignItems: "stretch",
  zIndex: 99
};
const flexSideBar = {
  width: "30%",
  maxWidth: 280,
  flexDirection: "row",
  alignItems: "stretch"
};
const overlay = {
  position: "absolute",
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
  zIndex: 90
};

export default (data: any, config: any = {}) => {
  const Container: any = NavContainer(data);

  if (config.contentComponent) {
    const SideBar = config.contentComponent;
    return observer((props: any) => {
      const ref = useRef({});
      const obs: any = useObservable({
        opened: false
      });
      useEffect(ResponsiveHandler(obs), []);
      useEffect(() => {
        if (ref.current) {
          (ref.current as any).toggleDrawer = function() {
            obs.opened = !obs.opened;
          };
          (ref.current as any).closeDrawer = function() {
            obs.opened = false;
          };
        }
      });
      return (
        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
            flexDirection: "row",
            alignItems: "stretch"
          }}
        >
          <View
            style={Responsive(
              {
                xs: {
                  ...absoluteSideBar,
                  ...{
                    minWidth: "50%"
                  },
                  transform: [{ scale: obs.opened ? 1 : 0 }]
                },
                sm: {
                  ...absoluteSideBar,
                  ...{
                    minWidth: "50%"
                  },
                  transform: [{ scale: obs.opened ? 1 : 0 }]
                },
                md: { ...flexSideBar, transform: [{ scale: 1 }] },
                lg: { ...flexSideBar, transform: [{ scale: 1 }] },
                xl: { ...flexSideBar, transform: [{ scale: 1 }] },
                xxl: { ...flexSideBar, transform: [{ scale: 1 }] }
              },
              obs.width
            )}
          >
            <SideBar navigation={ref.current} />
          </View>
          {obs.opened && (
            <TouchableOpacity
              onPress={() => {
                obs.opened = false;
              }}
              style={Responsive(
                {
                  xs: {
                    ...overlay
                  },
                  sm: {
                    ...overlay
                  },
                  md: {},
                  lg: {},
                  xl: {},
                  xxl: {}
                },
                obs.width
              )}
            />
          )}
          <Container ref={ref} parentNavigation={props.navigation} />
        </View>
      );
    });
  } else {
    return () => {
      return <Container />;
    };
  }
};
