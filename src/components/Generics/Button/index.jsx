import React from "react";
import { Container, Counter } from "./style";

const Button = (props) => {
  return (
    <Container {...props}>
      {props?.icon && <Counter>{icon}</Counter>}
      {props?.children}
    </Container>
  );
};

export default Button;
