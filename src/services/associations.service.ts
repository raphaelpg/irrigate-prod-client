import config from '../config/config';

const getAssociationsList = async () => {
  await fetch(config.server.serverUrl + config.server.getAssociations)
  .then((response: any) => response.json())
  .then((resultData: any) => {
    return resultData.data;
  });
};

export default {
  getAssociationsList
}