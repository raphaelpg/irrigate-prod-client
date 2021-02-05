import React, { useState, useEffect, useContext } from 'react'
import FilterLogo from '../Images/filterLogo'
import { UserContext } from '../../context/UserContext'

const CategoryFilter = (props) => {

	const { categories } = useContext(UserContext)
	const [ selectedCategory, setSelectedCategory ] = useState('')

	useEffect(() => {
		setSelectedCategory('All')
	}, [])

	const handleFilterClick = ({ target }) => {
		if (target.title) {
      setSelectedCategory(target.title)
      props.setCategory(target.title)
    } else if (target.innerHTML) {
      setSelectedCategory(target.innerHTML)
      props.setCategory(target.innerHTML)
    } else {
      setSelectedCategory(target.name)
      props.setCategory(target.name)
    }
	}

	return (
		<div className="category-filter">
			<div className="filter-title-container">
        <div className="causes-list-filter-title">Category:</div>
      </div>
			{categories.map(cat => {
				return (
					<div 
						key={cat} 
						className={selectedCategory === cat ? 'filter-and-logo-container-active' : 'filter-and-logo-container'}
						title={cat} 
						onClick={handleFilterClick} 
						onKeyDown={handleFilterClick}
						role="button" 
						tabIndex={0}
					>
						<FilterLogo filename={cat}/>
						<div className="causes-list-filter-name">{cat}</div>
					</div>
				)
			})}
	  </div>
	)
}

export default CategoryFilter