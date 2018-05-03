import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
	<div className="App">
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h1 className="App-title">Wind At Aireys</h1>
		</header>
		<div class="windstationContainer">
			<div className="windStation">
		        <ul class="windDetails">
					<li>
						<span class="label">Station</span>
						<span class="value">Aireys Inlet</span>
					</li>
					<li>
						<span class="label">Direction</span>
						<span class="value">NW</span>
					</li>
					<li>
						<span class="label">Speed </span>
						<span class="value">10knts</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
    );
  }
}

export default App;
