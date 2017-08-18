import {getCardFromFakeDB, addCardToFakeDB} from './db/index.js'
export const ADD_TODO = 'ADD_TODO'
export const LOAD_TODO = 'LOAD_TODO'

export const loadCards = () => {
  return dispatch => {
    getCardFromFakeDB()
    .then(cards => {
      dispatch({
        type: LOAD_TODO,
        cards
      });
    });
  }
};

export const addCard = card => {
  return (dispatch) => {
    addCardToFakeDB(card)
      .then(cards=> {
        dispatch({
          type: ADD_TODO,
          cards
        })
      });
  }
};
