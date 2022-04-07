import React, {Component} from 'react';

class ErrorBoundry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

componentDidCathc(error,info) {
	this.setState({hasError: true});
}

	render() {
		const {hasError} = this.state;
		if(hasError){
			return <h1>Oooooops. That's not good</h1>
		} else {
			return this.props.children
		}
	}
}

export default ErrorBoundry