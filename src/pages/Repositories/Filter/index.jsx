/* eslint-disable react/function-component-definition */
import React from "react";
import PropTypes from "prop-types";

import { FaTrashAlt } from "react-icons/fa";
import { Container, Selector, Cleaner } from "./styles";

const Filter = ({ languages, currentLanguage, onClick }) => {
  const selectors = languages.map(({ name, count, color }) => (
    <Selector
      onClick={() => onClick && onClick(name)}
      className={currentLanguage === name ? "selected" : ""}
      color={color}
      key={name.toLocaleLowerCase()}
    >
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ));
  return (
    <Container>
      {selectors}
      <Cleaner onClick={() => onClick && onClick(undefined)}>
        <FaTrashAlt />
        &nbsp;Limpar
      </Cleaner>
    </Container>
  );
};

Filter.defaultProps = {
  currentLanguage: null,
  onClick: null,
};

Filter.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      color: PropTypes.string,
    }).isRequired
  ).isRequired,
  currentLanguage: PropTypes.string,
  onClick: PropTypes.func,
};
export default Filter;
