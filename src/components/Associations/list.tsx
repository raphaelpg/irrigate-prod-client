import React, { useState, useEffect } from 'react'
import FadeIn from '../../effects/FadeIn'
import { serverUrl } from '../../data/data'
import { IAssociation } from '../../interfaces/Association'
// import { dataCauses } from '../../mock/database.js'

interface IListProps {
	selectedCategory: string,
  selectedLocation: string
}

const List: React.FC<IListProps> = (props) => {

	const [ associations, setAssociations ] = useState<IAssociation[]>([])

	useEffect(() => {
		fetch(serverUrl + "/api/causes")
		// fetch("/api/causes")
      .then(response => response.json())
      .then(resultData => {
        setAssociations(resultData)
    	})
	}, [])

	return (
		<div className="causes-list-container">
			{associations
				.filter((association: any) => {
					if (props.selectedCategory === 'All' && props.selectedLocation !=='Anywhere') {
						return association.continent === props.selectedLocation
					} else if (props.selectedCategory !== 'All' && props.selectedLocation ==='Anywhere') {
						return association.category === props.selectedCategory
					} else if (props.selectedCategory !== 'All' && props.selectedLocation !=='Anywhere') {
						return (association.category === props.selectedCategory && association.continent === props.selectedLocation)
					} else {
						return association
					}
				})
				.map((association, index) => {
					const {_id, name, description, link, category, continent, country, address, logo } = association;
					return(
						<FadeIn className="cause-display" duration={1500} triggerOnce={true} key={index}>
								<div className="cause-logo-container">
									<img className="cause-logo" src={logo} alt={name} />
								</div>
								<h3 className="cause-text">{name}</h3>
								<p className="cause-text">{category}</p>
								<p className="cause-text">Activity's location: {continent}, {country}</p>
								<p className="cause-text">{description}</p>
								<a className="cause-text" href={link} target="_blank" rel="noopener noreferrer">{link}</a>
								<p className="cause-address">Eth address: {address}</p>
								<p className="cause-number">Monthly donors: 2000 persons</p>
								<p className="cause-number">Monthly donations: 1500 DAI</p>
								<p className="cause-number">Total funds raised: 23500 DAI</p>
								<button className="add-cause-to-your-list-button" name={_id} >Add cause to your donation stream</button>
						</FadeIn>
					)
				}
			)}
	  </div>
	)
}


export default List