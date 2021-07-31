import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 750px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.theme.colors.lGray};
  border: 1px solid ${(props) => props.theme.colors.dGray};
`;

export const InputContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  border-radius: 3px;
  padding: 20px 30px 20px 20px;
`;
