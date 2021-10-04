import styled from 'styled-components';

export const AppContainer = styled.div`
  height: 37px;
  display: flex;
  justify-content: center;
  padding: 30px;

  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  transition: background-color 0.8s, linear, color 0.5s linear;
`;

export const MainSection = styled.div`
  text-align: center;
`;
