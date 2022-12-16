import { Route } from '@angular/router';

export const APP_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'page-a',
  },
  {
    path: 'page-a',
    loadComponent: () =>
      import('./pages/page-a/page-a.component').then(
        (mod) => mod.PageAComponent
      ),
  },
  {
    path: 'page-b',
    loadComponent: () =>
      import('./pages/page-b/page-b.component').then(
        (mod) => mod.PageBComponent
      ),
  },
  {
    path: 'page-c',
    loadComponent: () =>
      import('./pages/page-c/page-c.component').then(
        (mod) => mod.PageCComponent
      ),
    data: {
      preload: false,
    },
  },
  {
    path: 'page-d',
    loadComponent: () =>
      import('./pages/page-d/page-d.component').then(
        (mod) => mod.PageDComponent
      ),
  },
];
