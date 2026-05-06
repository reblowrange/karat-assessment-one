import { Routes } from '@angular/router';
import { FormContainer } from './components/form-container/form-container';
import { LoginComponent } from './components/login-component/login-component';
import { ProductContainer } from './components/product-container/product-container';
import { ProductDetailsComponent } from './components/product-details.component/product-details.component';
import { SearchComponent } from './components/search-component/search-component';
import { StringListComponent } from './components/string-list-component/string-list-component';
import { UserContainer } from './components/user-container/user-container';
import { AuthGuard } from './core/auth-guard';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: Home,
    children: [
      {
        path: 'string-list',
        component: StringListComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'user-container',
        component: UserContainer,
        canActivate: [AuthGuard]
      },
      {
        path: 'product-container',
        component: ProductContainer,
        canActivate: [AuthGuard],
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
        canActivate: [AuthGuard]
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'search',
        component: SearchComponent,
      },
      { path: '**', redirectTo: 'login' },
    ],
  },
  { path: '**', redirectTo: 'home' },
];
