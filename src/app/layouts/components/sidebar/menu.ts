import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'General',
    isTitle: true,
  },

  {
    id: 2,
    label: 'Dashboard',
    icon: 'bx bxs-dashboard',
    subItems: [
      {
        id: 3,
        label: 'Analytics',
        link: '/dashboard/analytics',
        parentId: 2,
      },
      {
        id: 4,
        label: 'CRM',
        link: '/dashboard/crm',
        parentId: 2,
      },
      {
        id: 5,
        label: 'E-commerce',
        link: '/dashboard/ecommerce',
        parentId: 2,
      },
      {
        id: 6,
        label: 'Sales',
        link: '/dashboard/sales',
        parentId: 2,
      },
    ],
  },
  {
    id: 7,
    label: 'Widget',
    icon: 'bx bxs-widget',
    subItems: [
      {
        id: 8,
        label: 'General',
        link: '/widget/general',
        parentId: 7,
      },
      {
        id: 9,
        label: 'Charts',
        link: '/widget/charts',
        parentId: 7,
      },
    ],
  },
  {
    id: 10,
    label: 'Layouts',
    icon: 'bx bx-layout',
    subItems: [
      {
        id: 11,
        label: 'Boxed',
        link: '/layout/boxed',
        parentId: 10,
      },
      {
        id: 12,
        label: 'RTL',
        link: '/layout/rtl',
        parentId: 10,
      },
      {
        id: 13,
        label: 'Dark Layout',
        link: '/layout/dark-layout',
        parentId: 10,
      },
    ],
  },
  {
    id: 14,
    label: 'apps',
    isTitle: true,
  },
  {
    id: 15,
    label: 'Email',
    icon: 'bx bx-layout',
    link: '/application/email',
    parentId: 14,
  },
  {
    id: 16,
    label: 'Projects',
    icon: 'bx bx-layout',
    subItems: [
      {
        id: 17,
        label: 'project list',
        link: '/application/project-list',
        parentId: 16,
      },
      {
        id: 18,
        label: 'Create project',
        link: '/application/create-project',
        parentId: 16,
      },
    ],
  },
  {
    id: 19,
    label: 'Chat',
    icon: 'bx bx-layout',
    link: '/application/chat',
    parentId: 14,
  },
  {
    id: 20,
    label: 'File Manager',
    icon: 'bx bx-layout',
    link: '/application/file-manager',
    parentId: 14,
  },
  {
    id: 21,
    label: 'components',
    isTitle: true,
  },
  {
    id: 22,
    label: 'UI Kits',
    icon: 'bx bx-layout',
    subItems: [
      {
        id: 23,
        label: 'Accordion',
        link: '/uikits/accordion',
        parentId: 21,
      },
      {
        id: 23,
        label: 'Buttons',
        link: '/uikits/buttons',
        parentId: 21,
      },
    ],
  },
];
