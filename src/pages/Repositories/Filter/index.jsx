/* eslint-disable react/function-component-definition */
import React from "react";

import { FaTrashAlt } from "react-icons/fa";
import { Container, Selector, Cleaner } from "./styles";

const Filter = () => {
  const langs = [
    { name: "JavaScript", count: 5, color: "#FCC419" },
    { name: "PHP", count: 5, color: "#E8590C" },
    { name: "Shell", count: 5, color: "#64666B" },
    { name: "C#", count: 5, color: "#4263Eb" },
  ];

  const selectors = langs.map(({ name, count, color }) => (
    <Selector color={color} key={name.toLocaleLowerCase()}>
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ));
  return (
    <Container>
      {selectors}
      <Cleaner>
        <FaTrashAlt />
        &nbsp;Limpar
      </Cleaner>
    </Container>
  );
};
export default Filter;
