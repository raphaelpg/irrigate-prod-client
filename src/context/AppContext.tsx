import { createContext } from 'react';
import { IAssociation } from '../interfaces/Association';

export interface IAppContext {
  categories: string[],
  locations: string[],
  associations: IAssociation[],
  retrieveAssociationsList: () => void
};

export const AppContext = createContext<IAppContext | null>(null);