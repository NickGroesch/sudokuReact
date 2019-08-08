import React from "react";
import Board from "./gameBoard";

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

function HelloBootstrap() {
  return (
    <div className="container text-center">
      <div className="jumbotron ">
        <h1>'sup world</h1>
        <p>first sudoku, then the world</p>
        <p>
          <button className="btn btn-primary btn-lg">BANG</button>
        </p>
      </div>
      <div className="card mb-4">
        <div className="card-header">
          <h3>This card will be filled with the game board</h3>
        </div>
        <div className="card-body mx-auto">
          <Game />
          <p className="card-text">Play here</p>
        </div>
      </div>
    </div>
  );
}

export default HelloBootstrap;
