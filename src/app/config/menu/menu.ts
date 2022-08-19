import { IMenu } from '@config/menu/menu.interfaces';

export const menuSidenav: IMenu[] = [
  // Menu de ejemplo
  {
    name: 'Menu 1',
    icon: 'module-document-center',
    subMenu: [
      {
        name: 'menu.menu-1.demo', //Ruta de la traducción
        route: 'demo',
      },
      {
        name: 'Sub menu',
        subMenu: [
          {
            name: 'Ejemplo sub menu',
            route: '',
          },
          {
            name: 'Ejemplo sub menu',
            route: '',
          },
        ],
      },
      {
        name: 'Sub menu',
        subMenu: [
          {
            name: 'Ejemplo submenu',
            route: '',
          },
        ],
      },
    ],
  },
  // Menu de ejemplo
  {
    name: 'Menu 2',
    icon: 'module-payment',
    subMenu: [
      {
        name: 'Submenu',
        route: '',
      },
      {
        name: 'Submenu',
        route: '',
      },
    ],
  },
];
