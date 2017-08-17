import React from "react";

const TodoFilterInput = ({ setSearchFilter }) => (<input type="text" placeholder="Search..." onChange={ setSearchFilter }
  />);



export default TodoFilterInput;