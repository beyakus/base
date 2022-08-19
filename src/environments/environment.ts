import { endpoints } from './endpoints';

export const environment = {
  production: false,
  ...{ endpoints },
  enableActiveDirectoryLogging: false,
};
