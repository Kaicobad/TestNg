import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authGuard/auth.guard';
import { NavComponent } from './Pages/nav/nav.component';

const routes: Routes = 
[
  {
    path:"",
    component:NavComponent
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then(mod => mod.LandingModule),
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
