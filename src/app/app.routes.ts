import { Routes } from '@angular/router';
import { ProductContainer } from './components/product-container/product-container';
import { ProductDetailsComponent } from './components/product-details.component/product-details.component';
import { StringListComponent } from './components/string-list-component/string-list-component';
import { UserContainer } from './components/user-container/user-container';
import { Home } from './home/home';
import { FormContainer } from './components/form-container/form-container';

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
      {
        path: 'form-container',
        component: FormContainer,
      },
    ],
  },
  { path: '**', redirectTo: 'home' },
];
