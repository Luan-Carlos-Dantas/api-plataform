import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  padding: 0 2rem;
  overflow-y: hidden;
`;

export const GitLogo = styled.img`
  width: 130px;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  color: ${(props) => props.theme.colors.white};
`;

export const Form = styled.div`
  width: 100%;
  max-width: 583px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 64px;
  line-height: 64px;
  border: none;
  border-radius: 10px;
  font-size: 24px;
  margin-right: 24px;
  padding: 0 24px;
  color: ${(props) => props.theme.colors.white};

  &::placeholder {
    color: ${(props) => props.theme.colors.gray600};
  }
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  width: 80px;
  height: 64px;
  border: 3px solid ${(props) => props.theme.colors.gray600};
  border-radius: 10px;
  transition: background 0.3s;
  color: ${(props) => props.theme.colors.white};

  &:hover {
    background-color: ${(props) => props.theme.colors.gray300};
    color: ${(props) => props.theme.colors.gray600};
  }
`;
