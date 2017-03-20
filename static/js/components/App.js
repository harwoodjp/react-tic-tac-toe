import React from 'react';
import Container from './Container';
import TicTacToe from './TicTacToe';

class App extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return(
			<Container>
				<TicTacToe />
			</Container>
		) 
	}
}
export default App