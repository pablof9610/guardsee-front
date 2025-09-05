import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductComponent } from './pages/product/product.component';
import { ManageComponent } from './pages/manage/manage.component';
import { AuditComponent } from './pages/audit/audit.component';
import { LoginRegisterComponent } from './pages/login/login-register.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'product', component: ProductComponent },
      {path: 'manage', component: ManageComponent},
      {path: 'audit', component: AuditComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: '', component: LoginRegisterComponent }
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];

// [
//   {path: 'dashboard', component: DashboardComponent},
//   {path: 'product', component: ProductComponent},
//   {path: 'manage', component: ManageComponent},
//   {path: 'audit', component: AuditComponent },
//   {path: 'auth', component: LoginRegisterComponent },
//   {path: '', redirectTo: '/auth', pathMatch: 'full'}
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
