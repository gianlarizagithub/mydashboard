import { Routes } from '@angular/router';

export const ContentRoutes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../../contents/general/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'uikits',
    loadChildren: () =>
      import('../../contents/components/uikits/uikits.module').then(
        (m) => m.UikitsModule
      ),
  },
];
