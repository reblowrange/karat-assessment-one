import { Routes } from '@angular/router';
import { Home } from './home/home';
import { StringListComponent } from './string-list-component/string-list-component';
import { UserContainer } from './user-container/user-container';
import { ProductContainer } from './product-container/product-container';
import { ProductDetailsComponent } from './product-details.component/product-details.component';

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
      {
        path: 'user-container',
        component: UserContainer,
      },
      {
        path: 'product-container',
        component: ProductContainer,
        children: [
          {
            path: 'product/:id',
            component: ProductDetailsComponent,
          },
        ],
      },
    ],
  },
  { path: '**', redirectTo: 'home' },
];
