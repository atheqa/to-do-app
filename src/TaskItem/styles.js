import styled from 'styled-components';

export const TaskBox = styled.div`
  width: 100%;
  display: flex;
  background-color: ${(props) => props.theme.colors.lGray};
  border: 1px solid ${(props) => props.theme.colors.dGray};
  justify-content: space-between;
  align-items: center;
  padding: 2px 1px 2px 6px;

  > button {
    width: 100px;
    height: 30px;
  }
`;
