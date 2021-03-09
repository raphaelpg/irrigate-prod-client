import React, { useState, useEffect } from 'react'
import CategoryFilter from '../Filters/categoryFilter'
import LocationFilter from '../Filters/locationFilter'
import List from './list'

const Associations: React.FC = () => {

	const [ selectedCategory, setSelectedCategory ] = useState<string>('')
	const [ selectedLocation, setSelectedLocation ] = useState<string>('')

	useEffect(() => {
		setSelectedCategory('All')
		setSelectedLocation('Anywhere')
	}, [])

	const setCategory = (cat: string) => {
		setSelectedCategory(cat)
	}

	const setLocation = (location: string) => {
		setSelectedLocation(location)
	}

	return (
	<div className="projects-container">
    <CategoryFilter setCategory={setCategory} />
    <LocationFilter setLocation={setLocation} />
    <List 
    	selectedCategory={selectedCategory}
    	selectedLocation={selectedLocation}
    />
  </div>
	)
}


export default Associations