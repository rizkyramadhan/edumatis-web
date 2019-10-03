import { observer, useObservable } from "mobx-react-lite";
import React, { useRef } from "react";
import { toJS } from "mobx";
const container = (routes: any) => {
  const routeStack: any[] = [];
  let navParam: any = {};
  return observer(
    (props: any, ref: any) => {
      let screenRef = useRef(null);
      let current = useObservable({
        name: ""
      });
      if (current.name === "") {
        Object.keys(routes).map((r: any, index: number) => {
          if (index === 0) {
            current.name = r;
            screenRef.current = routes[r].screen;
          }
        });
      }
      const navigation = {
        _routes: routes,
        getParam: function(key: string) {
          return navParam[key];
        },
        dangerouslyGetParent: function() {
          return props.parentNavigation;
        },
        goBack: function() {
          if (routeStack.length > 0) {
            const screen = routeStack.pop();
            if (routes[screen.name]) {
              navParam = screen.data;
              screenRef.current = routes[screen.name].screen;
              current.name = screen.name;
            }
          }
        },
        navigate: function(screen: string, data: any) {
          routeStack.push({ name: current.name, data: toJS(navParam) });
          if (routes[screen]) {
            navParam = data;
            screenRef.current = routes[screen].screen;
            current.name = screen;
          }
        },
        replace: function(screen: string) {
          if (routes[screen]) {
            screenRef.current = routes[screen].screen;
            current.name = screen;
          }
        },
        popToTop: function() {
          if (props.parentNavigation) {
            props.parentNavigation.popToTop();
          } else {
            let first = Object.keys(routes)[0];
            current.name = first;
            screenRef.current = routes[first].screen;
          }
        }
      };
      const Component: any = screenRef.current;
      if (ref && ref.current) {
        ref.current = navigation;
      }

      return <Component {...props} navigation={navigation} />;
    },
    { forwardRef: true }
  );
};

export default (data: any) => {
  return container(data);
};

export const createNavigateTo = function(navigation: any) {
  return function(screen: string) {
    navigation.replace(screen);
    if (navigation.closeDrawer) navigation.closeDrawer();
  };
};
