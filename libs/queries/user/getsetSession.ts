import { AsyncStorage } from "react-native";
import query from "../crud/query";
import config from "@app/libs/config";

export async function setSession(value: any) {
  try {
    await AsyncStorage.setItem("SESSION", JSON.stringify(value));
  } catch (error) {
    return;
  }
}

export async function getSession(loadFromCache = true) {
  try {
    const sessionRaw = await AsyncStorage.getItem("SESSION");
    if (sessionRaw !== null) {
      let session = JSON.parse(sessionRaw);
      if (loadFromCache === false) {
        session.user = await query("user", [...config.user.columns], {
          where: { username: session.user.username }
        });
        setSession(session);
      }

      return session;
    }
    return null;
  } catch (error) {
    return null;
  }
}
