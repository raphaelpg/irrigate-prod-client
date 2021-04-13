import React, { useContext, useEffect } from 'react';
import { IAppContext, AppContext } from '../../context/AppContext';
import FadeIn from '../../effects/FadeIn';
import { IAssociation } from '../../interfaces/Association';

interface IListProps {
	selectedCategory: string,
  selectedLocation: string
};

const List: React.FC<IListProps> = (props) => {
	const componentContext: IAppContext | null = useContext(AppContext);
	const associations: IAssociation[] | undefined = componentContext?.associations;

	useEffect(() => {
		componentContext?.retrieveAssociationsList();
	}, []);

	if (associations != undefined) {
		return (
			<div className="causes-list-container">
				{associations
					.filter((association: any) => {
						if (props.selectedCategory === 'All' && props.selectedLocation !=='Anywhere') {
							return association.continent === props.selectedLocation;
						} else if (props.selectedCategory !== 'All' && props.selectedLocation ==='Anywhere') {
							return association.category === props.selectedCategory;
						} else if (props.selectedCategory !== 'All' && props.selectedLocation !=='Anywhere') {
							return (association.category === props.selectedCategory && association.continent === props.selectedLocation);
						} else {
							return association;
						};
					})
					.map((association, index) => {
						const {_id, name, description, link, category, continent, country, logo, address } = association;
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
									<p className="cause-number">Monthly donors: 2000 persons</p>
									<p className="cause-number">Monthly donations: 1500 DAI</p>
									<p className="cause-number">Total funds raised: 23500 DAI</p>
									<p className="cause-number">Eth address: {address}</p>
									<button className="add-cause-to-your-list-button" name={_id} >Add cause to your donation stream</button>
							</FadeIn>
						);
					}
				)}
			</div>
		);
	} else {
		return (
			<div className="causes-list-container"></div>
		);
	};
};

export default List;