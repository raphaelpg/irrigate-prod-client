import React, { useState, useEffect, useContext } from 'react';
import { IAppContext, AppContext } from '../../context/AppContext';
const images = require.context('../../images', true);

interface ILocationFilterProps {
	setLocation: (location: string) => void;
};

const LocationFilter: React.FC<ILocationFilterProps> = (props) => {
	const componentContext: IAppContext | null = useContext(AppContext);
	const locations = componentContext?.locations;
	const [ selectedLocation, setSelectedLocation ] = useState<string>();

	useEffect(() => {
		setSelectedLocation('Anywhere')
	}, []);

	const handleFilterClick = ({ target }: any) => {
		if (target.title) {
      setSelectedLocation(target.title);
      props.setLocation(target.title);
    } else if (target.innerHTML) {
      setSelectedLocation(target.innerHTML);
      props.setLocation(target.innerHTML);
    } else {
      setSelectedLocation(target.name);
      props.setLocation(target.name);
    };
	};

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
						<img className="cause-filter-logo" alt={location} src={images(`./${location}.jpg`)} name={location} />
						<div className="causes-list-filter-name">{location}</div>
					</div>
				)
			})}
	  </div>
	);
};

export default LocationFilter;