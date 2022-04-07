import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from'../components/SearchBox';
// import { robots } from './robots';
import './MainApp.css';
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'

class MainApp extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({robots: users}));
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}
	
	render(){
		const {robots, searchfield} = this.state;
		const filteredRobots = robots.filter(robot =>
		{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		if (!robots.length) {
			return (
					<article class="vh-100 dt w-100">
					  <div class="dtc v-mid tc">
					    <h1 class="f-subheadline-l tc">Loading...</h1>
					  </div>
					</article>
					);
		} else {
			return(
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange} />		
					<Scroll>
						<ErrorBoundry>
							<CardList robots={filteredRobots}/>
						</ErrorBoundry>
					</Scroll>
				</div>
			);
		}
	}
}

export default MainApp;

//props are simply things that come out of state