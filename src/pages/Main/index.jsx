import React, { useState } from "react";

import { FaSearch } from "react-icons/fa";

import { Container, GitLogo, Title, Form, Input, Button } from "./styles";

import githublogo from "../../assets/images/github-logo.svg";

// eslint-disable-next-line react/function-component-definition
const MainPage = () => {
  const [login, setLogin] = useState("");

  return (
    <Container>
      <GitLogo src={githublogo} alt="API Github" />
      <Title>API Github</Title>
      <Form>
        <Input
          value={login}
          onChange={(ev) => setLogin(ev.target.value)}
          placeholder="Digite o nome do Usuário"
        />
        <Button to={`/${login}/repositories`}>
          <FaSearch size={24} />
        </Button>
      </Form>
    </Container>
  );
};

export default MainPage;
