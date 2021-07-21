import React from 'react';
import { Container, InputContainer, MainContainer } from '/styles';
import { TextInput } from '../ui';
import { Button } from '../ui';

export const ToDoView = () => {
  /* const renderToDoView = () => ( */
  <MainContainer>
    <Container>
      <InputContainer>
        <TextInput labelText="Add task" type="text" width="770px" />
      </InputContainer>

      <Button width="150px">Add Task</Button>
    </Container>
  </MainContainer>;
  /* );
  onChangeEvent={(ev) => addTask(ev.target.value)}
  value={task}
  disabled={disabled} onClickEvent={() => addTask()}
   */
};
