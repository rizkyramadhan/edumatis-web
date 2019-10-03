import React, { useEffect } from "react";
import { FlatList, Text, View, ScrollView } from "react-native";
import UIButton from "./UIButton";
const UIList = (props: {
  data: any[];
  render: any;
  loading: boolean;
  extraData?: any;
  reload?: any;
  style?: any;
}) => {
  useEffect(() => {
    if (props.reload) props.reload();
  }, []);

  return (
    <ScrollView {...props.style}>
      {props.loading && <Text style={{ margin: 15 }}>Loading...</Text>}
      {props.data.length === 0 ? (
        !props.loading && (
          <View style={{ alignItems: "center" }}>
            <Text style={{ textAlign: "center", margin: 15 }}>
              &mdash; Empty &mdash;
            </Text>
            <UIButton
              onPress={props.reload}
              size="small"
              style={{ width: 100 }}
            >
              Refresh
            </UIButton>
          </View>
        )
      ) : (
        <FlatList
          extraData={props.extraData}
          data={props.data}
          keyExtractor={(item: any, index: number) => {
            return index.toString();
          }}
          refreshing={props.loading}
          onRefresh={props.reload}
          renderItem={data => {
            return props.render(data);
          }}
        />
      )}
    </ScrollView>
  );
};

UIList.defaultProps = {
  name: "UIList"
};

export default UIList;
