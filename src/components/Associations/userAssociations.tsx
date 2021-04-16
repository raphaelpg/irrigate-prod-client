import React, { useEffect, useState, useContext } from 'react';
import { IAppContext, AppContext } from '../../context/AppContext';
import { IUser } from '../../interfaces/User';
import { IAssociation } from '../../interfaces/Association';

const UserAssociations: React.FC = () => {
  const componentContext: IAppContext | null = useContext(AppContext);
  const associations: IAssociation[] | undefined = componentContext?.associations;
  const [userAssociations, setUserAssociations] = useState<string[]>([])

  const getUserAssociations: () => string[] | undefined = () => {
    if (localStorage.getItem('user')) {
      const user: IUser = JSON.parse(localStorage.getItem('user')!);
      return user.subscribedAssociations;
    }
  }

  useEffect(() => {
    const asso = getUserAssociations();
    if (asso) {
      setUserAssociations(asso)
    }
    componentContext?.retrieveAssociationsList();
  }, [])

  console.log("associations:", associations)
  console.log("userAssociations:", userAssociations)
  return (
    <div className="user-causes-list-container">
      <h2 className="delete-label">Associations you are giving to:</h2>
      {associations.filter(asso => {
          if (userAssociations.indexOf(asso._id!) !== -1) return asso
        }).map((association: any) => {
          return(
            <div className="user-cause-display" key={association._id}>
              <div className="cause-logo-container">
                <img className="cause-logo" src={association.logo} alt={association.name} />
              </div>
              <div>
              <h3 className="user-cause-text">{association.name}</h3>
              <p className="user-cause-text">{association.category}</p>
              <p className="user-cause-text">Activity's location: {association.continent}, {association.country}</p>
              <a className="user-cause-text" href={association.link} target="_blank" rel="noopener noreferrer">{association.link}</a>
              <p className="cause-number">Eth address: {association.address}</p>

              </div>
              <p className="user-cause-text">{association.description}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default UserAssociations;