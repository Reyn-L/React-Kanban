import React from 'react';
import Todo from '../../components/Todo';

const TodoList = ({ cards}) => (

  <ul>
    {console.log("IM OVER HERE",cards)}
      {cards.map(card => <Todo title={card.title} priority={card.priority} createdBy={card.createdBy} assignedTo={card.assignedTo} />)}

  </ul>
);

export default TodoList;