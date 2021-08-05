import React from 'react';
import { TaskBox } from './styles';
import { Button } from '../ui/button';

export const TaskItem = ({ task }) => {
  const deleteTask = () => {};
  const renderTaskItemView = () => (
    <TaskBox>
      <div>{task}</div>
      <Button onClickEvent={() => deleteTask()}>Delete</Button>
    </TaskBox>
  );

  return renderTaskItemView();
};
