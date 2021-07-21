import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.lGray};
  border: 1px solid ${(props) => props.theme.colors.dGray};
`;

export const InputContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-radius: 3px;
  padding: 10px 0;
`;
