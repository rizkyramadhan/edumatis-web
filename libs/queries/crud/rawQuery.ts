import config from "@app/libs/config";
import { AsyncStorage } from "react-native";

interface opts {
  useSession?: boolean;
}

export default async (query: string, options?: opts) => {
  const opt = {
    ...{ useSession: true, debug: false, where: {}, args: "limit:1" },
    ...options
  };

  let headers: any = {
    "Content-Type": "application/json"
  };
  if (opt.useSession) {
    const sessionRaw = await AsyncStorage.getItem("SESSION");
    const session = JSON.parse(sessionRaw || "false");
    if (!session) {
      return false;
    } else {
      headers["X-Hasura-Session-Id"] = session.id;
    }
  }

  const response: Response = await fetch(config.url, {
    method: "POST",
    body: JSON.stringify({
      query
    }),
    headers
  });
  const json = await response.json();
  return json.data;
};
