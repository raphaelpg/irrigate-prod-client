import React, { useState, useEffect, useContext } from 'react'
import FilterLogo from '../Images/FilterLogo'
import { IUserContext, UserContext } from '../../context/UserContext'

interface ILocationFilterProps {
	setLocation: (location: string) => void;
}

const LocationFilter: React.FC<ILocationFilterProps> = (props) => {
	const componentContext: IUserContext | null = useContext(UserContext)
	const locations = componentContext?.locations
	const [ selectedLocation, setSelectedLocation ] = useState<string>()

	useEffect(() => {
		setSelectedLocation('Anywhere')
	}, [])

	const handleFilterClick = ({ target }: any) => {
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
			{locations?.map((location: string) => {
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