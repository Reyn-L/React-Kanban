import React from 'react';
import Todo from '../../components/Todo';

const TodoList = ({ cards }) => (
  <ul>
    {
      cards.map( ({ title, priority, createdBy, assignedTo }) =>
        <Todo
          title={title}
          priority={priority}
          createdBy={createdBy}
          assignedTo={assignedTo}
        />
      )
    }
  </ul>
);

export default TodoList;