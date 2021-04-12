const SERVER = {
  environment: "prod",
  serverUrl: `https://www.future-space.org`,
  getAssociations: '/api/causes',
  addAssociation: '/api/add_association',
  deleteAssociation: '/api/association/delete',
  updateAssociation: '/api/association/update',
  getUser: '/api/user',
  signUp: '/signup',
  deleteUser: '/api/user/delete',
  sendMessage: '/message'
};

// const SERVER = {
//   environment: "test",
//   serverUrl: `http://localhost:8080`,
//   getAssociations: '/api/associations',
//   addAssociation: '/api/association/add',
//   deleteAssociation: '/api/association/delete',
//   updateAssociation: '/api/association/update',
//   getUser: '/api/user',
//   signUp: '/api/user/add',
//   deleteUser: '/api/user/delete',
//   sendMessage: '/api/message/add'
// };

const CATEGORIES = [
	'All', 
	'Animal Protection', 
	'Development', 
	'Education', 
	'Environment', 
	'Health', 
	'Human Rights'
];

const LOCATIONS = [
	'Anywhere', 
	'Africa', 
	'America', 
	'Asia', 
	'Europe', 
	'Oceania', 
	'Poles'
];

const FILTERS = [
	{
		name: "Categories",
		keys: CATEGORIES
	},
	{
		name: "Locations",
		keys: LOCATIONS
	}
]

const config = {
  server: SERVER,
	filters: FILTERS,
  categories: CATEGORIES,
  locations: LOCATIONS,
};

export default config;
