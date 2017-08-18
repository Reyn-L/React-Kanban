import React, { Component } from 'react';
import './App.css';
import {getCardFromFakeDB, addCardToFakeDB} from '../../db/index.js'
import NewTodoForm from '../NewTodoForm';
import TodoList from '../TodoList';
import Title from '../../components/title';
import { connect } from 'react-redux';
import { loadCards, addCard } from '../../actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "KANBAN",
      cards: []
    };
    this.addCard = this.addCard.bind(this);
  }

  addCard(newCard) {
    this.props.addCard(newCard);
    // addCardToFakeDB(newCard)
    // .then(cards => {
    //   this.setState({cards:cards});
    // });
  }

  componentDidMount() {
    getCardFromFakeDB().then(cards => {
      this.setState({ cards: cards });
    });
  }

  render() {
    return (
      <div className="App">
        <Title title={this.state.title} />
        <p className="App-intro" />
        <TodoList cards={this.state.cards} />
        <NewTodoForm addCard={this.addCard} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadCards: () => {
      dispatch(loadCards())
    },
    addCard: card => {
      dispatch(addCard(card))
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;
