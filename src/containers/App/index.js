import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import {getCardFromFakeDB, addCardToFakeDB} from '../../db/index.js'
import NewTodoForm from '../NewTodoForm';
import TodoList from '../TodoList';
import Title from '../../components/title'
import TodoFilterInput from '../../components/TodoFilterInput';

class App extends Component {
  constructor() {
    super();

    this.state = {
      title: "KANBAN",
      cards: []
    };
    this.parentAddCard = this.parentAddCard.bind(this);
  }

  parentAddCard(newCard) {
    addCardToFakeDB(newCard)
    .then(cards => {
      this.setState({cards:cards});
    });
  }

  componentDidMount() {
    getCardFromFakeDB().then(cardlist => {
      this.setState({ cards: cardlist });
    });
  }

  render() {
    return (
      <div className="App">
        <Title title={this.state.title} />
        <p className="App-intro" />
        <TodoList cards={this.state.cards} />
        <NewTodoForm childAddCard={this.parentAddCard} />
      </div>
    );
  }
}

export default App;
