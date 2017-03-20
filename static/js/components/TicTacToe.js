import React from 'react';
import Square from './Square';
import Board from './Board';

class TicTacToe extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			CURRENT_TURN: "X",
			boardProgress:[null,null,null,null,null,null,null,null,null]
		}
        this.markSquare = this.markSquare.bind(this)		
	}

	markSquare(thisSquare) {
		if (this.checkSquare(thisSquare)) {
			let newState = this.state;
			newState.boardProgress[thisSquare.props.index] = this.state.CURRENT_TURN;
			this.setState(newState);
			this.checkWinner();
			this.changeTurn();			
		}
	}

	changeTurn() {
		let newState = this.state;
		if (this.state.CURRENT_TURN === "X") {
			newState.CURRENT_TURN = "O";
		}
		else {
			newState.CURRENT_TURN = "X";
		}
		this.setState(newState);		
	}

	checkSquare(thisSquare) {
		if (this.state.boardProgress[thisSquare.props.index] === null) {
			return true;
		}
	} 

	checkWinner() {
		let boardProgress = this.state.boardProgress;
		if (boardProgress[0] !== null && boardProgress[0]===boardProgress[1] && boardProgress[1] ===boardProgress[2]) {
			alert(`WINNER: ${this.state.CURRENT_TURN}`);
			window.location="";
		}
		if (boardProgress[0] !== null && boardProgress[0]===boardProgress[3] && boardProgress[3] ===boardProgress[6]) {
			alert(`WINNER: ${this.state.CURRENT_TURN}`);
			window.location="";			
		}
		if (boardProgress[0] !== null && boardProgress[0]===boardProgress[4] && boardProgress[4] ===boardProgress[8]) {
			alert(`WINNER: ${this.state.CURRENT_TURN}`);
			window.location="";			
		}
		if (boardProgress[1] !== null && boardProgress[1]===boardProgress[4] && boardProgress[4] ===boardProgress[7]) {
			alert(`WINNER: ${this.state.CURRENT_TURN}`);
			window.location="";			
		}
		if (boardProgress[2] !== null && boardProgress[2]===boardProgress[5] && boardProgress[5] ===boardProgress[8]) {
			alert(`WINNER: ${this.state.CURRENT_TURN}`);
			window.location="";
		}
		if (boardProgress[2] !== null && boardProgress[2]===boardProgress[4] && boardProgress[4] ===boardProgress[6]) {
			alert(`WINNER: ${this.state.CURRENT_TURN}`);
			window.location="";			
		}
		if (boardProgress[3] !== null && boardProgress[3]===boardProgress[4] && boardProgress[4] ===boardProgress[5]) {
			alert(`WINNER: ${this.state.CURRENT_TURN}`);
			window.location="";			
		}
		if (boardProgress[6] !== null && boardProgress[6]===boardProgress[7] && boardProgress[7] ===boardProgress[8]) {
			alert(`WINNER: ${this.state.CURRENT_TURN}`);
			window.location="";			
		}
	}

	render() {
	    return (
	    	<Board boardProgress={this.state.boardProgress} markSquare={this.markSquare} />
	    );
	}
}

export default TicTacToe