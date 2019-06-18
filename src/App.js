import React, { useState } from 'react'

const App = () => {
	const [sliderValue, setSliderValue] = useState(50)

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
					overflow: 'hidden',
					boxShadow: '0 3px 5px 0 rgba(0, 0, 0, 0.08)',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column'
				}}>
				<h3>Value: {sliderValue}%</h3>

				<div
					css={{
						width: '90%',
						position: 'relative',
						height: 20,
						borderRadius: 200,
						background: '#02606f'
					}}>
					<div
						css={{
							width: 40,
							height: 40,
							left: `calc(${sliderValue}% - 20px)`,
							top: -10,
							position: 'absolute',
							background: '#e46361',
							opacity: 1,
							cursor: 'pointer',
							borderRadius: '50%'
						}}
					/>
				</div>
			</div>
		</div>
	)
}

export default App
