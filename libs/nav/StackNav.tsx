import NavContainer from "./NavContainer";

export default (data: any, config: any = {}, isRoot: boolean = false) => {
  const Container: any = NavContainer(data);
  return (props: any) => {
    return <Container {...props} parentNavigation={props.navigation} />;
  };
};
