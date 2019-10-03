import config from "@app/libs/config";

export function format(column: string, value: any) {
  if ((config.identifierType as any)[column] === "int") return value;
  else return `"${value}"`;
}

export function getUnique(arr: any[], comp: any) {
  const unique = arr
    .map(e => e[comp])

    // store the keys of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)

    // eliminate the dead keys & store unique objects
    .filter((e:any) => arr[e])
    .map((e:any) => arr[e]);

  return unique;
}
