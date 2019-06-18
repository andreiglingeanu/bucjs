import React, { useState, useEffect, useCallback, useRef } from 'react'

const clamp = (min, max, value) => Math.max(min, Math.min(max, value))

const computeLinearScale = (domain, range, value) =>
	range[0] +
	((range[1] - range[0]) / (domain[1] - domain[0])) * (value - domain[0])

const Slider = ({ sliderValue, setSliderValue, min = 0, max = 100 }) => {
	const [isDragging, setIsDragging] = useState(false)
	const el = useRef(null)

	const properSliderValue = computeLinearScale(
		[min, max],
		[0, 100],
		sliderValue
	)

	const computeAndSendNewValue = ({ pageX }) => {
		let { left, width } = el.current.getBoundingClientRect()

		setSliderValue(
			Math.round(
				clamp(
					min,
					max,
					computeLinearScale([0, width], [min, max], pageX - left)
				)
			)
		)
	}

	const handleUp = useCallback(e => {
		setIsDragging(false)
		computeAndSendNewValue(e)
	}, [])

	const handleMove = useCallback(e => {
		if (isDragging) return
		computeAndSendNewValue(e)
	}, [])

	useEffect(
		() => {
			if (!isDragging) return

			document.documentElement.addEventListener('mousemove', handleMove)
			document.documentElement.addEventListener('mouseup', handleUp)

			return () => {
				document.documentElement.removeEventListener(
					'mousemove',
					handleMove
				)

				document.documentElement.removeEventListener(
					'mouseup',
					handleUp
				)
			}
		},
		[isDragging]
	)

	return (
		<div
			ref={el}
			onMouseDown={() => setIsDragging(true)}
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
					left: `calc(${properSliderValue}% - 20px)`,
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
