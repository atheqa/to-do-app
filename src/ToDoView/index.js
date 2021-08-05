import React, { useState } from 'react';
import {
  Container,
  InputContainer,
  MainContainer,
  TaskContainer,
} from './styles';
import { TextInput } from '../ui';
import { Button } from '../ui';
import { TaskItem } from '../TaskItem';

export const ToDoView = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState(
    localStorage.getItem('taskit').split(','),
  );

  //the button becomes active when there is text in the input field
  const isDisabled = task.length < 1;

  const addTask = () => {
    let finalList = taskList; //creates an array so we don't change the useState array directly

    finalList.push(task); // adds the input task into the final list
    setTaskList(finalList); // calling the setTaskList function to save finalList as taskList
    setTask(''); // empties the input for another task
    localStorage.setItem('taskit', taskList);
  };

  //the main view for the app
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
          onClickEvent={() => addTask()}
          width="150px"
        >
          Add Task
        </Button>
      </Container>

      <TaskContainer>
        {taskList.map((task, idx) => (
          <TaskItem key={task + idx} task={task} />
        ))}
      </TaskContainer>
    </MainContainer>
  );

  return <MainContainer>{renderToDoView()}</MainContainer>;
};
