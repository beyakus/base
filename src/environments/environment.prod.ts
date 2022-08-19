import { endpoints } from './endpoints';

export const environment = {
  production: true,
  ...{ endpoints },
  enableActiveDirectoryLogging: false,
};
