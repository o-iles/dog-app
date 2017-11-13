import React, { Component } from 'react';


class AppHeader extends Component {

	render() {
		return(
			<div>

				<div className="App-header">
					<h1 className = "App-title">find the dog of your dreams</h1>
				</div>

				<div className= "line" />

				<div className="App-intro">
					<p>what are you looking for?</p>
				</div>

			</div>
			)
	}
}

export default AppHeader;