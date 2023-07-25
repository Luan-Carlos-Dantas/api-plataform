/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/function-component-definition */
import React from "react";
import { Container, Name, Description, Footer, Lang, Link } from "./styles";

const Repository = () => (
  <Container>
    <Name>Hello World</Name>
    <Description>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quia ullam,
      eum molestiae exercitationem, officia porro est vel optio accusamus
      sapiente mollitia, odio vero dignissimos praesentium? Quaerat tempora
      optio veniam.
    </Description>
    <Footer color="">
      <Lang>Repository Lang</Lang>
      <Link href="#" target="blank">
        Ver
      </Link>
    </Footer>
  </Container>
);

export default Repository;
