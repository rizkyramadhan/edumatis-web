import { AsyncStorage } from "react-native";
import config from "@app/libs/config";

interface opts {
  useSession?: boolean;
  debug?: boolean;
}

export default async (
  query: string,
  wsCallback: (value: any) => void,
  options?: opts
) => {
  const opt = {
    ...{ useSession: true, debug: false },
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

  const ws = new WebSocket(config.wsurl);
  ws.onopen = async () => {
    ws.send(
      JSON.stringify({
        type: "connection_init",
        payload: {
          headers
        }
      })
    );
    ws.send(
      JSON.stringify({
        id: "1",
        type: "start",
        payload: {
          variables: {},
          extensions: {},
          operationName: null,
          query
        }
      })
    );
  };

  ws.onmessage = (e: any) => {
    try {
      const data = JSON.parse(e.data);
      if (data.type === "data" || data.type === "error") {
        wsCallback(data);
        if (data.type === "error") {
          console.log(query, data);
        }
      }
    } catch (err) {}
  };

  ws.onerror = (e: any) => {
    // an error occurred
  };

  ws.onclose = (e: any) => {
    // connection closed
  };
  return ws;
};
