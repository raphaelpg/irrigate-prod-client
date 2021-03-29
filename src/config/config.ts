const SERVER = {
  serverUrl: `https://www.future-space.org`,
  // serverUrl: `http://localhost:8080`,
  getAssociations: '/api/causes',
  // getAssociations: '/api/associations',
  addAssociation: '/api/add_association',
  // addAssociation: '/api/association/add',
  deleteAssociation: '/api/association/delete',
  updateAssociation: '/api/association/update',
  getUser: '/api/user',
  signUp: '/signup',
  // signUp: '/api/user/add',
  deleteUser: '/api/user/delete',
  sendMessage: '/message'
  // sendMessage: '/api/message/add'
}

const config = {
  server: SERVER
}

export default config;
