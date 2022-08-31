import { endpoints } from './endpoints';

export const environment = {
  production: true,
  ...{ endpoints },
  enableMsal: false,
  enableMsalConsole: false,
  clientId: 'YOUR CLIENTID',
  authorityUrl: 'YOUR_URL',
  scopes: ['SCOPE'],
};
