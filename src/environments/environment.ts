import { endpoints } from './endpoints';

export const environment = {
  production: false,
  ...{ endpoints },
  enableMsal: false,
  enableMsalConsole: false,
  clientId: 'YOUR CLIENTID',
  authorityUrl: 'YOUR_URL',
  scopes: ['SCOPE'],
};
