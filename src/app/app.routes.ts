import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@features/map-shell/pages/map-shell'),
    children: [
      {
        path: '',
        loadComponent: () => import('@features/map-shell/pages/home/home'),
      },
      {
        path: 'favorites',
        loadComponent: () => import('@features/favorites/pages/favorites'),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
