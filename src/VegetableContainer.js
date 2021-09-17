import React, { useState } from 'react'
// import VeggieList from './VeggieList'
import List from './List'
import Input from './Input'

const VegetableContainer = (props) => {
	const [veggiesToDisplay, setVeggiesToDisplay] = useState(props.veggies)
	const [filterVeggieValue, setFilterVeggieValue] = useState('')

	const handleFilterChange = (e) => {
		e.preventDefault()
		const newVeggieValue = e.target.value
		setFilterVeggieValue(newVeggieValue)
		const filteredVeggieList = props.veggies.filter((veggie) => {
			return veggie.toLowerCase().includes(newVeggieValue.toLowerCase())
		})

		setVeggiesToDisplay(filteredVeggieList)
	}

	return (
		<div>
			<Input value={filterVeggieValue} onChange={handleFilterChange} />
			{/* <VeggieList veggies={veggiesToDisplay} /> */}
			<List veggies={veggiesToDisplay} />
		</div>
	)
}

export default VegetableContainer