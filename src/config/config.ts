const SERVER = {
  environment: "prod",
  serverUrl: `https://www.future-space.org`,
  getAssociations: '/api/associations',
  addAssociation: '/api/association/add',
  deleteAssociation: '/api/association/delete',
  updateAssociation: '/api/association/update',
  getUser: '/api/user',
  signUp: '/api/user/add',
	logIn: '/api/user/login',
  deleteUser: '/api/user/delete',
  sendMessage: '/api/message/add'
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
// 	logIn: '/api/user/login',
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
};

export default config;
