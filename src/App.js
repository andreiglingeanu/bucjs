import React, { useState } from 'react'
import Slider from './Slider'

const App = () => {
	const [sliderValue, setSliderValue] = useState(30)

	return (
		<div
			css={{
				width: '100vw',
				height: '100vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}}>
			<div
				css={{
					background: '#23bcd4',
					width: '70%',
					height: '50%',
					borderRadius: 15,
					boxShadow: '0 3px 5px 0 rgba(0, 0, 0, 0.08)',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column'
				}}>
				<h3>Value: {sliderValue}%</h3>

				<Slider
					sliderValue={sliderValue}
					setSliderValue={setSliderValue}
				/>
			</div>
		</div>
	)
}

export default App
