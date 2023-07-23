/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { FaUsers, FaBriefcase, FaIndustry, FaLink } from "react-icons/fa";

import { Container, Header, Login, Name, Avatar, Inner, Data } from "./styles";

// eslint-disable-next-line react/function-component-definition
const Profile = () => (
  <Container>
    <Header>
      <Avatar src="https://avatars.githubusercontent.com/u/109487706?v=4" />
      <Login>Luan-Carlos-Dantas</Login>
      <Name>Luan Carlos Dantas dos Santos</Name>
      <Inner>
        <Data>
          <FaUsers size={20} />
          20&nbsp;<i>seguidores</i> &middot; 10&nbsp;<i>seguindo</i>
        </Data>
        <Data>
          <FaBriefcase size={20} />
          2RI Guarulhos
        </Data>
        <Data>
          <FaIndustry size={20} />
          Guarulhos
        </Data>
        <Data>
          <FaLink size={20} />
          <a href="#">Link</a>
        </Data>
      </Inner>
    </Header>
  </Container>
);

export default Profile;
