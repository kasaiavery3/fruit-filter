import React, { useState } from 'react'
import Input from './Input'
import List from './List'
// import FruitList from './FruitList'

const FruitContainer = (props) => {
	// Initialize the fruit list to the array passed in props
	const [fruitsToDisplay, setFruitsToDisplay] = useState(props.fruits)
	// Initialize the filter value to an empty string
	const [filterValue, setFilterValue] = useState('')

	const handleFilterChange = (e) => {
		e.preventDefault()

		const newValue = e.target.value
		setFilterValue(newValue)

		// remove fruits that don't contain the filter value
		const filteredFruitList = props.fruits.filter((fruit) => {
			return fruit.toLowerCase().includes(newValue.toLowerCase())
		})

		setFruitsToDisplay(filteredFruitList)
	}

	return (
		<div>
			<Input value={filterValue} onChange={handleFilterChange} />
			{/* <FruitList fruits={fruitsToDisplay} /> */}
			<List fruits={fruitsToDisplay} />
		</div>
	)
}

export default FruitContainer
