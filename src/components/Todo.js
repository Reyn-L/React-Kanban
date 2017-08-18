import React from 'react'

const Todo = ({title, priority, status, createdBy, assignedTo}) =>(
  <li>
    <p>{title} {""}</p>
    <p>{priority} {""} </p>
    <p>{status} {""}</p>
    <p>{createdBy} {""}</p>
    <p>{assignedTo} {""}</p>
  </li>
);

export default Todo;