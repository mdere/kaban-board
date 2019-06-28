import React, { Component } from 'react';
// import cookie from "react-cookie";
import './cardColumns.css';

const INITIAL_STATE = {
  columns: [
    {
      label: "Winnie",
      cards: [
        {
          description: "Card 1"
        },
        {
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      ]
    },
    {
      label: "Bob",
      cards: [
        {
          description: "Card 1"
        },
        {
          description: "Card 2"
        }
      ]
    },
    {
      label: "Thomas",
      cards: [
        {
          description: "Card 1"
        },
        {
          description: "Card 2"
        }
      ]
    },
    {
      label: "George",
      cards: [
        {
          description: "Card 1"
        },
        {
          description: "Card 2"
        }
      ]
    },
  ]
}

class CardColumns extends Component {
  constructor(props) {
    super(props)
    this.state = INITIAL_STATE
    // this.addCard = this.addCard.bind(this);
  }

  componentDidUpdate() {
  }

  addCard(index) {
    const input = window.prompt();
    let newColumns = [...this.state.columns];
    newColumns[index].cards.push({
      description: input
    });
    this.setState({
      columns: newColumns
    });
  }

  moveCard(card, cardIndex, currentIndex, newIndex) {
    let newColumns = [...this.state.columns];
    newColumns[currentIndex].cards.splice(cardIndex, 1);
    newColumns[newIndex].cards.push(card);
    this.setState({
      columns: newColumns
    })
  }

  renderLeftArrow(card, cardIndex, columnIndex) {
    if ((columnIndex > 0 && columnIndex < this.state.columns.length - 1) || columnIndex === this.state.columns.length -1) {
      return (
        <div
          className="arrow"
          onClick={() => this.moveCard(card, cardIndex, columnIndex, columnIndex - 1)}>
          {"<"}
        </div>
      );
    }
    return null
  }

  renderRightArrow(card, cardIndex, columnIndex) {
    if ((columnIndex > 0 && columnIndex < this.state.columns.length - 1) || columnIndex === 0) {
      return (
        <div
          className="arrow"
          onClick={() => this.moveCard(card, cardIndex, columnIndex, columnIndex + 1)}>
          {">"}
        </div>
      );
    }
    return null
  }

  renderCards(cards, columnIndex) {
    return cards.map((card, index) => {
      return (
        <div
          key={card.description}
          className="card-container">
          {this.renderLeftArrow(card, index, columnIndex)}
          <div className="description">
            {card.description}
          </div>
          {this.renderRightArrow(card, index, columnIndex)}
        </div>
      )
    })
  }

  renderColumns() {
    return this.state.columns.map((column, index) => {
      return (
        <div
          className="column-container"
          key={column.label}>
          <div className="label-header">
            {column.label}
          </div>
          
          {this.renderCards(column.cards, index)}

          <div onClick={() => this.addCard(index)}>
            + Add Card
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="container">
        {this.renderColumns()}
      </div>
    )
  }
}

export default CardColumns;