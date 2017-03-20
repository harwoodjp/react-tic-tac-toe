import React from 'react';

class Square extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
	    return (
	    	<div className="square" onClick={ () => { this.props.markSquare(this) } }>
	    		<span>{this.props.squareProgress}</span>
	    	</div>
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


export default Square