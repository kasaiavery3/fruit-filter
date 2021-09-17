import React from 'react'

const FruitList = (props) => {
	const fruitItems = props.fruits.map((fruit, idx) => {
		return <li key={idx}>{fruit}</li>
	})

	return <ul>{fruitItems}</ul>
}

export default FruitList
