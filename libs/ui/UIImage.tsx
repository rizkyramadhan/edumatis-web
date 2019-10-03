import React from "react";

export default (props: any) => {
  const myprops = {
    src: props.source,
    style: props.style
  };
  return <img {...myprops} />;
};
