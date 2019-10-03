import UIBody from "@app/libs/ui/UIBody";
import UIContainer from "@app/libs/ui/UIContainer";
import UIHead from "@app/libs/ui/UIHead";
import { observer, useObservable } from "mobx-react-lite";
import React from "react";
import { Text } from "react-native";

export default observer(({ navigation }: any) => {
  const data = useObservable({
    loading: true
  });

  return (
    <UIContainer>
      <UIHead navigation={navigation} title="Blank" onBack={() => {}} />
      <UIBody>
        <Text>Halo {data.loading}</Text>
      </UIBody>
    </UIContainer>
  );
});
