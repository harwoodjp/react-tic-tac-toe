import React from 'react';

class Container extends React.Component {
	render() {
	    return (
	      <div className="container">
	          {this.props.children}
	      </div>
	    );
	}
}

class App extends React.Component {

	constructor(props) {
		super(props)
	}

	componentWillMount() {
		this.setState({
			message: "!"
		})
	}

	render() {
		return(
			<Container>
				<h1 onClick={() => this.setState({message: this.state.message + "!"})   }>
					Hello, {this.props.name}{this.state.message}
				</h1>
			</Container>
		) 
	}
}
export default App