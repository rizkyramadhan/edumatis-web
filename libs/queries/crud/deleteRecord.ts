import config from "@app/libs/config";
import { checkSession } from "../user/checkSession";

interface opts {
  useSession?: boolean;
  debug?: boolean;
  primaryKey?: string;
}

export default async (table: string, data: any, options?: opts) => {
  const opt = {
    ...{ useSession: true, debug: false, primaryKey: "id" },
    ...options
  };
  const pk =
    typeof data[opt.primaryKey] === "string"
      ? `"${data[opt.primaryKey]}"`
      : data[opt.primaryKey];

  const gql = `mutation delete {
    delete_${table}(
      where: {${opt.primaryKey}: {_eq: ${pk}}},
    ) {
      affected_rows
    }
  }`;
  let headers: any = {
    "Content-Type": "application/json"
  };
  if (opt.useSession) {
    const session = await checkSession();
    headers["X-Hasura-Session-Id"] = session.id;
    if (!session) {
      return false;
    }
  }

  const response: Response = await fetch(config.url, {
    method: "POST",
    body: JSON.stringify({
      operationName: "delete",
      query: gql
    }),
    headers
  });
  const json = await response.json();
  if (response.status !== 200) {
    if (json && json.errors && json.errors[0] && json.errors[0].message) {
      throw `
(Create Record Failed) ${json.errors[0].message} 

GraphQL Mutation:
${gql}

Data: 
${JSON.stringify(data, null, 2).replace(/"/gi, "'")}
        `.trim();
    }
    return null;
  }
  return json;
};
