import group19 from './assets/Group-19.svg';
import group15 from './assets/Group-15.svg';
import group23 from './assets/Group-23.svg';
import Cards from './Cards.js';

import './App.css';
function App() {
	return (
		<div className='App'>
			<img className='group19' src={group19}></img>
			<div className='home-container'>
				<div className='home-1'>
					<img src={group23} className='group23'></img>
				</div>
				<div className='home-2'>
					<div className='home-text-container'>
						<div className='home-text-header'>
							<p>A simple solution to</p>
							<p>complex tasks is</p>
							<p>coming soon</p>
						</div>
						<div className='home-text-subheading'>
							<p>
								Say goodbye to inefficient juggling of multiple apps, teams, and
							</p>
							<p>
								projects. Officelite is the new collaboration platform built
								with
							</p>
							<p>an intuitive interface to improve productivity</p>
						</div>
						<div className='home-button-container'>
							<div className='home-button'>
								<p>Get Started</p>
							</div>
						</div>
					</div>

					<div className='home-svg-container'>
						<img className='group15' src={group15}></img>
					</div>
				</div>
			</div>
			<div className='home-2-container'>
				<Cards />
			</div>
		</div>
	);
}

export default App;
