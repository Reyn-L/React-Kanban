import { ADD_TODO,
  LOAD_TODO }
  from "./actions";

const initialState = {
  cards: []
};

const todoAppReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TODO:
      return Object.assign({}, state, {
        cards: [...action.cards]
      });

    case ADD_TODO:
      return Object.assign({}, state, {
        cards: [...action.cards]
      });

    default:
      return state;
  }
};

export default todoAppReducer;
