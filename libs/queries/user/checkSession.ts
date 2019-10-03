import config from "@app/libs/config";
import { getSession } from "./getsetSession";

const get = require("lodash.get");

export const checkSession = async () => {
  const session = await getSession();
  if (!session) return null;
  try {
    const response = await fetch(config.url, {
      method: "POST",
      body: JSON.stringify({
        query: `{
          session(where:{id:{_eq:"${session.id}"}}) {
            id
            ${config.table} {
              ${config.user.columns.join("\n")}
            }
          }
        }`
      }),
      headers: {
        "Content-Type": "application/json",
        "X-Hasura-Session-Id": session.id
      }
    });

    const res = await response.json();
    return get(res, `data.session[0]`);
  } catch (e) {
    return session;
  }
};
