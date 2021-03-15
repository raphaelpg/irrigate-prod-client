import {IAssociation} from '../interfaces/Association'

export const mockAssociation: IAssociation = {
  "name": "Mock Association",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "link": "https://www.mocksite.xyz/",
  "category": "Human Rights",
  "continent": "Worldwide",
  "country": "Worldwide",
  "address": "0x1A7e2a64920B245F6951b674dFcc4105ea6d39f8",
  "logoName": "ressources/amnesty.gif",
  "logo": "data:image/gif;base64,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"
}