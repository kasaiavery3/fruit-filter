import React from 'react'

const VeggieList = (props) => {
	const veggieItems = props.veggies.map((veggie, idx) => {
		return <li key={idx}>{veggie}</li>
	})

	return <ul>{veggieItems}</ul>
}

export default VeggieList
