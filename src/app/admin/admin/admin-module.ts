import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideRouter, Routes } from '@angular/router';
import { AdminPanel } from '../admin-panel/admin-panel';

const adminRoutes: Routes = [
  {
    path: 'admin-panel',
    component: AdminPanel,
  },
  { path: '**', redirectTo: 'admin-panel' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [provideRouter(adminRoutes)],
})
export class AdminModule {}
