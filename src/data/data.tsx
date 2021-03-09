export interface IAssociation {
	_id: string,
	date: string,
	name: string, 
	description: string,
	link?: string,
	category: string,
	continent: string,
	country: string,
	address?: string,
	logoName?: string,
	logo?: string,
}

export const serverUrl = `https://www.future-space.org/api/causes`;
// export const serverUrl = `http://localhost:8080/api/causes`;

export const dataCategories = [
	'All', 
	'Animal Protection', 
	'Development', 
	'Education', 
	'Environment', 
	'Health', 
	'Human Rights'
];

export const dataLocations = [
	'Anywhere', 
	'Africa', 
	'America', 
	'Asia', 
	'Europe', 
	'Oceania', 
	'Poles'
];