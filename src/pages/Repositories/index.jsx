import { React, useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./Repos";
import { Loading, Container, Sidebar, Main } from "./styles";
import { getLangsFrom, getUser, getRepositories } from "../../services/api";

// eslint-disable-next-line react/function-component-definition
const RepositoriesPage = () => {
  const { login } = useParams();

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [langs, setLangs] = useState();
  const [currentLanguage, setCurrentLanguage] = useState();
  const [repositories, setRepositories] = useState();

  useEffect(() => {
    const loadData = async () => {
      const [userReponse, reposReponse] = await Promise.all([
        getUser(login),
        getRepositories(login),
      ]);

      setUser(userReponse.data);
      setRepositories(reposReponse.data);
      setLangs(getLangsFrom(reposReponse.data));
      setLoading(false);
    };

    loadData();
  }, []);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  if (loading) {
    return <Loading>Carregando...</Loading>;
  }

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter
          languages={langs}
          currentLanguage={currentLanguage}
          onClick={onFilterClick}
        />
      </Sidebar>
      <Main>
        <Repositories
          repositories={repositories}
          currentLanguage={currentLanguage}
        />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
