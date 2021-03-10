import React, { useState, useEffect, useContext } from 'react'
import FilterLogo from '../Images/filterLogo'
import { IUserContext, UserContext } from '../../context/userContext'

interface ICategoryFilterProps {
	setCategory: (category: string) => void
}

const CategoryFilter: React.FC<ICategoryFilterProps> = (props) => {
	const componentContext: IUserContext | null = useContext(UserContext)
	const categories = componentContext?.categories
	const [ selectedCategory, setSelectedCategory ] = useState<string>('')

	useEffect(() => {
		setSelectedCategory('All')
	}, [])

	const handleFilterClick = ({ target }: any) => {
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
			{categories?.map((cat: string) => {
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