import React from 'react'
import Card from './components/Card/Card'


const App = () => {
	return(
		<div className="card-box">
			<Card 
				day = {12}
				month = 'Aug'
				year = {2016}
				author = 'Jon Doe'
				title = 'Boxing icon has the will for a couple more fights'
				text = 'The highly anticipated world championship fight will take place at 10am and is the second major boxing blockbuster in the nation after 43 years.'
			/>
		</div>
		
	)
}

export default App
