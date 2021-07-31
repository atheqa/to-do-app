import React, { useState } from 'react';
import { Container, InputContainer, MainContainer } from './styles';
import { TextInput } from '../ui';
import { Button } from '../ui';

export const ToDoView = () => {
  const [task, setTask] = useState('');

  //the button becoms active when there is text in the input field
  const isEmpty = (value) => value.length < 1;
  const isDisabled = isEmpty(task);

  const renderToDoView = () => (
    <MainContainer>
      <Container>
        <InputContainer>
          <TextInput
            onChangeEvent={(ev) => setTask(ev.target.value)}
            type="text"
            value={task}
            width="770px"
          />
        </InputContainer>

        <Button
          disabled={isDisabled}
          // onClickEvent={() => addTask()}
          width="150px"
        >
          Add Task
        </Button>
      </Container>
    </MainContainer>
  );

  return <MainContainer>{renderToDoView()};</MainContainer>;
};
