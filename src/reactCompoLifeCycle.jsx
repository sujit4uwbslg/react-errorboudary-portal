import React from 'react';

export default class RactCompoLifeCycle extends React.Component {
	constructor(props)
	{
		super(props);
		this.state = { hello : "World!" };
	}

	componentWillMount()
	{
		console.log("componentWillMount()");
	}

	componentDidMount()
	{
		console.log("componentDidMount()");
	}

	changeState()
	{
		this.setState({ hello : "Geek!" });
	}

	render()
	{
		return (
			<div>
			<h1>Hello Planet, Hello{ this.state.hello }</h1>
			<h2>
			<a onClick={this.changeState.bind(this)} href="/#">Press Here!</a>
			</h2>
			</div>);
	}

	shouldComponentUpdate(nextProps, nextState)
	{
		console.log("shouldComponentUpdate()");
		return true;
	}

	componentWillUpdate()
	{
		console.log("componentWillUpdate()");
	}

	componentDidUpdate()
	{
		console.log("componentDidUpdate()");
	}
}

