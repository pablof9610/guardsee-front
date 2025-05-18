import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductComponent } from './pages/product/product.component';
import { ManageComponent } from './pages/manage/manage.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'product', component: ProductComponent},
  {path: 'manage', component: ManageComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
