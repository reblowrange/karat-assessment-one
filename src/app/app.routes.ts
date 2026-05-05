import { Routes } from '@angular/router';
import { Home } from './home/home';
import { StringListComponent } from './string-list-component/string-list-component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: Home,
    children: [
      {
        path: 'string-list',
        component: StringListComponent,
      },
    ],
  },
  { path: '**', redirectTo: 'home' },
];
