/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";

import { FaUsers, FaBriefcase, FaIndustry, FaLink } from "react-icons/fa";

import { Container, Header, Login, Name, Avatar, Inner, Data } from "./styles";

// eslint-disable-next-line react/function-component-definition
const Profile = ({ user }) => (
  <Container>
    <Header>
      <Avatar src={user.avatar_url} />
      <Login>{user.login}</Login>
      <Name>{user.name}</Name>
      <Inner>
        <Data>
          <FaUsers size={20} />
          {user.followers}&nbsp;<i>seguidores</i> &middot; {user.following}
          &nbsp;<i>seguindo</i>
        </Data>
        {user.company && (
          <Data>
            <FaBriefcase size={20} />
            {user.company}
          </Data>
        )}
        {user.location && (
          <Data>
            <FaIndustry size={20} />
            {user.location}
          </Data>
        )}
        {user.blog && (
          <Data>
            <FaLink size={20} />
            <a href={`${user.blog}`} target="_blank">
              {user.blog}
            </a>
          </Data>
        )}
      </Inner>
    </Header>
  </Container>
);

Profile.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    company: PropTypes.string,
    blog: PropTypes.string.isRequired,
    location: PropTypes.string,
  }).isRequired,
};

export default Profile;
