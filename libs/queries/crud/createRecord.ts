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
  const gql = `mutation create($data:${table}_insert_input!) {
    insert_${table}(
      objects: [$data]
    ) {
      returning {
        ${opt.primaryKey}
      }
    }
  }`;
  if (opt && opt.debug) {
    console.log(gql, data);
  }
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

  const postData: any = {};
  for (let i in data) {
    if (i.endsWith("_aggregate")) {
      continue;
    }
    postData[i] = data[i];
  }

  const response: Response = await fetch(config.url, {
    method: "POST",
    body: JSON.stringify({
      operationName: "create",
      query: gql,
      variables: {
        data: postData
      }
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
  return json.data[`insert_${table}`].returning[0].id;
};
