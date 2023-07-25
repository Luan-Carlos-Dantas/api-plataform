import React from "react";

import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./Repos";
import { Container, Sidebar, Main } from "./styles";

// eslint-disable-next-line react/function-component-definition
const RepositoriesPage = () => {
  const user = {
    login: "Luan-Carlos-Dantas",
    avatar_url: "https://avatars.githubusercontent.com/u/109487706?v=4",
    followers: 2,
    following: 5,
    name: "Luan Carlos Dantas dos Santos",
    company: "",
    blog: "https://luan-carlos-dantas.github.io/site-portifolio.github.io/",
    location: "",
  };
  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
