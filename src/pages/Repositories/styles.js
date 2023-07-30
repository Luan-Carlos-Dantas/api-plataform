import styled from "styled-components";

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.main`
  display: flex;
  min-height: 100vh;
  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`;
export const Sidebar = styled.aside`
  background: ${(props) => props.theme.colors.gray900};
  min-width: 8rem;
  height: 100%;
`;

export const Main = styled.aside`
  background: ${(props) => props.theme.colors.gray700};
  padding: 40px;
  width: 100%;
  flex: 1;
  height: 100vw;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    height: 100%;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 40px 20px;
  }
`;
