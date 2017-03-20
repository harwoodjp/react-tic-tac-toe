import React from 'react';
import Square from './Square';

class Board extends React.Component {
	constructor(props) {
		super(props)
	}	
	render() {
	    return (
	      <div className="board">
			<Square squareProgress={this.props.boardProgress[0]} markSquare={this.props.markSquare} index={0} />
			<Square squareProgress={this.props.boardProgress[1]} markSquare={this.props.markSquare} index={1} />
			<Square squareProgress={this.props.boardProgress[2]} markSquare={this.props.markSquare} index={2} />
			<Square squareProgress={this.props.boardProgress[3]} markSquare={this.props.markSquare} index={3} />
			<Square squareProgress={this.props.boardProgress[4]} markSquare={this.props.markSquare} index={4} />
			<Square squareProgress={this.props.boardProgress[5]} markSquare={this.props.markSquare} index={5} />
			<Square squareProgress={this.props.boardProgress[6]} markSquare={this.props.markSquare} index={6} />
			<Square squareProgress={this.props.boardProgress[7]} markSquare={this.props.markSquare} index={7} />
			<Square squareProgress={this.props.boardProgress[8]} markSquare={this.props.markSquare} index={8} />
	      </div>
	    );
	}
}

export default Board