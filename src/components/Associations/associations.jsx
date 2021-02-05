import React, { useState, useEffect } from 'react'
import CategoryFilter from '../Filters/categoryFilter'
import LocationFilter from '../Filters/locationFilter'
import List from './list'

const Associations = () => {

	const [ selectedCategory, setSelectedCategory ] = useState('')
	const [ selectedLocation, setSelectedLocation ] = useState('')

	useEffect(() => {
		setSelectedCategory('All')
		setSelectedLocation('Anywhere')
	}, [])

	const setCategory = (cat) => {
		setSelectedCategory(cat)
	}

	const setLocation = (location) => {
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