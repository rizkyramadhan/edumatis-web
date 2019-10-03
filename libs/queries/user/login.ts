import config from "@app/libs/config";

const get = require("lodash.get");

export default async (
  client_id: string,
  username: string = "",
  password: string = ""
) => {
  const query = `query ($u: String!, $c: Int!) {
    ${config.table}(where: {_and: {${config.identifier.client_id}: {_eq: $c}, ${
    config.identifier.username
  }: {_eq: $u}}}) {
      sessions(limit: 1, order_by: {tstamp: desc}) {
        id
        ${config.table} {
          ${config.user.columns.join("\n")}
        }
      }
    }
  }`;
  const response: Response = await fetch(config.url, {
    method: "POST",
    body: JSON.stringify({
      query,
      variables: {
        u: username,
        c: client_id
      }
    }),
    headers: {
      "Content-Type": "application/json",
      "X-Hasura-Username": username,
      "X-Hasura-Password": password,
      "X-Hasura-Cid": client_id
    }
  });
  const res = await response.json();
  return get(res, `data.${config.table}[0].sessions[0]`);
};
