import React from 'react'

const Slider = ({ sliderValue, setSliderValue, }) => {
	return (
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
	)
}

export default Slider
