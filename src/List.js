import React from 'react'

const List = (props) => {
	const foodStuff = props.food.map((food, idx) => {
		return <li key={idx}>{food}</li>
	})

	return <ul>{foodStuff}</ul>
}

export default List
