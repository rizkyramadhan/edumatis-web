import { St } from "@app/libs/ui/Style";
import React from "react";
import { View } from "react-native";

export default ({ children, cardProps, component }: any) => {
    return (
        <View
            style={St.Card}
            {...cardProps}>
            {children}
        </View>
    );
};