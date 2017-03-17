import React from 'react';
import Board from './Board';

class TicTacToe extends React.Component {
	render() {
	    return (
	    	<Board>
	    		<Square />
		    	<Square />
		    	<Square />
		    	<Square />
		    	<Square />
		    	<Square />
		    	<Square />
		    	<Square />
		    	<Square />
	    	</Board>
	    );
	}
}

class Square extends React.Component {

	constructor(props) {
		super(props)
	}

	componentWillMount() {
		this.setState({
			active:0
		})
	}

	render() {
	    return (
	    	<div className="square" onClick={ () => { toggleActive(this) } }> state:{this.state.active} </div>
	    )
	}

}

function toggleActive(square) {
	if (square.state.active === 0) {
		square.setState({
			active:1
		});
	} else {
		square.setState({
			active:0
		});
	}
}


export default TicTacToe