import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    {
      path: '',
      loadComponent: () =>
        import('./components/home/home.js')
          .then(m => m.Home)
    },
    {
      path: 'academic',
      loadComponent: () =>
        import('./components/academic/academic.js')
          .then(m => m.Academic)
    },
    {
      path: 'profesional',
      loadComponent: () =>
        import('./components/profesional/profesional.js')
          .then(m => m.Profesional)
    },
    {
      path: 'me',
      loadComponent: () =>
        import('./components/me/me.js')
          .then(m => m.Me)
    },
    {
      path: 'contact',
      loadComponent: () =>
        import('./components/contact/contact.js')
          .then(m => m.Contact)
    }
  ];
  