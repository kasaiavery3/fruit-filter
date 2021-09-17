import './App.css'
import FruitContainer from './FruitContainer'
import VegetableContainer from './VegetableContainer'

function App() {
	const fruitArr = [
		'🍎Apple🍎',
		'🍏Green Apple🍏',
		'🍌Banana🍌',
		'🍇Grapes🍇',
		'🥝Kiwi🥝',
		'🍍Pineapple🍍',
		'🐉Dragonfruit🐉',
		'🥭Mango🥭',
		'🍊Orange🍊',
		'🍋Lemon🍋',
		'🍐Pear🍐',
		'🍉Watermelon🍉',
		'🍓Strawberry🍓',
		'🫐Blueberry🫐',
		'🍈Cantaloupe🍈',
		'🍒Cherry🍒',
		'🍑Peach🍑',
		'🥥Coconut🥥'
	]
	const veggieArr = [
		'🥬lettuce🥬',
		'🥕carrot🥕',
		'🌽corn🌽',
		'🥦broccoli🥦',
		'🍆eggplant🍆',
		'🥒cucumber🥒',
		'🫑bell pepper🫑',
		'🍅tomato🍅',
		'🌶chili pepper🌶',
		'🫒olive🫒',
		'🧅onion🧅',
		'🥔potato🥔',
		'🍠sweet potato🍠',
		'🥑avocado🥑',
		'🧄garlic🧄'
	]
	return (
		<div className='App'>
			<FruitContainer fruits={fruitArr} />
			<VegetableContainer veggies={veggieArr} />
		</div>
	)
}

export default App
