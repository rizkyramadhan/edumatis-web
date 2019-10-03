import React from "react";
export default (props: any) => {
  return (
    <div {...props} dangerouslySetInnerHTML={{ __html: props.source.html }} />
  );
};
