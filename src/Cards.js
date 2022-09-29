import React from 'react';
import './Cards.css';

function Cards() {
	return (
		<div className='cards-container'>
			<div className='card-white'>
				<div className='card-white-sec'>
					<div className='card-white-sec1'>
						<p>Basic</p>
						<p>Free</p>
						<p>Up to 5 users for free</p>
					</div>
					<div className='card-white-sec2'>
						<p>Basic documentation collaboration</p>
						<p>2 GB storage</p>
						<p>Great security and support</p>
					</div>
				</div>
				<div className='card-button'>
					<div className='card-button-circle'>
						<p className='card-button-text'>Try for Free</p>
					</div>
				</div>
			</div>
			<div className='card-blue'>
				<div className='card-blue-sec'>
					<div className='card-blue-sec1'>
						<p>Pro</p>
						<p>$9.99</p>
						<p>Per user, billed monthly</p>
					</div>
					<div className='card-blue-sec2'>
						<p>All essential integrations</p>
						<p>50 GB storage</p>
						<p>More control and insights</p>
					</div>
				</div>
				<div className='card-button-blue'>
					<div className='card-button-circle'>
						<p className='card-button-text'>Try for Free</p>
					</div>
				</div>
			</div>

			<div className='card-white'>
				<div className='card-white-sec'>
					<div className='card-white-sec1'>
						<p>Ultimate</p>
						<p>$19.99</p>
						<p>Per user, billed monthly</p>
					</div>
					<div className='card-white-sec2'>
						<p>Robust work management</p>
						<p>100 GB storage</p>
						<p>VIP</p>
					</div>
				</div>
				<div className='card-button'>
					<div className='card-button-circle'>
						<p className='card-button-text'>Try for Free</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cards;
