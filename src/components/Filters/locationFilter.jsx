import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import FilterLogo from '../Images/filterLogo'

const LocationFilter = (props) => {

	const { locations } = useContext(UserContext)
	const [ selectedLocation, setSelectedLocation ] = useState([])

	useEffect(() => {
		setSelectedLocation('Anywhere')
	}, [])

	const handleFilterClick = ({ target }) => {
		if (target.title) {
      setSelectedLocation(target.title)
      props.setLocation(target.title)
    } else if (target.innerHTML) {
      setSelectedLocation(target.innerHTML)
      props.setLocation(target.innerHTML)
    } else {
      setSelectedLocation(target.name)
      props.setLocation(target.name)
    }
	}

	return (
		<div className="category-filter">
			<div className="filter-title-container">
        <div className="causes-list-filter-title">Location:</div>
      </div>
			{locations.map(location => {
				return (
					<div 
						key={location} 
						className={selectedLocation === location ? 'filter-and-logo-container-active' : 'filter-and-logo-container'}
						title={location} 
						onClick={handleFilterClick} 
						onKeyDown={handleFilterClick} 
						role="button" 
						tabIndex={0}
					>
						<FilterLogo filename={location}/>
						<div className="causes-list-filter-name">{location}</div>
					</div>
				)
			})}
	  </div>
	)
}

export default LocationFilter