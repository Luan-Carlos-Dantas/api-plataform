import React from "react";

import Profile from "./Profile";
import Filter from "./Filter";
import { Container, Sidebar, Main } from "./styles";

// eslint-disable-next-line react/function-component-definition
const RepositoriesPage = () => (
  <Container>
    <Sidebar>
      <Profile />
      <Filter />
    </Sidebar>
    <Main>MAIN</Main>
  </Container>
);

export default RepositoriesPage;
