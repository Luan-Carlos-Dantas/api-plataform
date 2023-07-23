import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 0.2rem;
  margin: 1rem auto;
  padding-right: 2rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: auto auto auto;
    gap: 0.8rem;
    padding: 0 1rem;
  }
`;

export const Selector = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${(props) => props.theme.colors.gray800};
  color: ${(props) => props.color || props.theme.colors.white};
  width: 100%;
  min-height: 2rem;
  border: none;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  transition: background 0.3s, transform 0.3s;
  padding: 0 1rem;
  cursor: pointer;

  &:hover,
  &.selected {
    background-color: ${(props) => props.color || props.theme.colors.gray100};
    color: ${(props) =>
      props.color ? props.theme.colors.white : props.theme.colors.black};
    transform: translateX(5px) scale(1.02);
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    border-radius: 20px;
    &:hover,
    &.selected {
      transform: translateX(0) scale(1.02);
    }
  }
`;

export const Cleaner = styled.button`
  align-self: center;
  margin-top: 1rem;
  background: transparent;
  text-align: left;
  color: ${(props) => props.theme.colors.white};
  border: none;

  padding: 1rem;
  cursor: pointer;

  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    text-align: center;
    padding: 0 1rem;
  }
`;
