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
					justifyContent: 'center'
				}}>
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
							left: -20,
							top: -10,
							position: 'absolute',
							background: '#e46361',
							opacity: 1,
							borderRadius: '50%',
							transform: `translateX(${sliderValue}%)`
						}}
					/>
				</div>
			</div>
		</div>
	)
}

export default App
