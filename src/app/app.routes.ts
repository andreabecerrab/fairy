import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home')
        .then(m => m.Home)
  },
  {
    path: 'academic',
    loadComponent: () =>
      import('./components/academic/academic')
        .then(m => m.Academic)
  },
  {
    path: 'profesional',
    loadComponent: () =>
      import('./components/profesional/profesional')
        .then(m => m.Profesional)
  },
  {
    path: 'me',
    loadComponent: () =>
      import('./components/me/me')
        .then(m => m.Me)
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./components/contact/contact')
        .then(m => m.Contact)
  }
];