import { createContext } from 'react';

export interface IAppContext {
  categories: string[],
  locations: string[]
}

export const AppContext = createContext<IAppContext | null>(null);