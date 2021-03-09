import { createContext } from 'react';

export interface IUserContext {
  categories: string[],
  locations: string[]
}

export const UserContext = createContext<IUserContext | null>(null);