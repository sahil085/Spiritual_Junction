import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccessDeniedComponent} from './components/access-denied/access-denied.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {NotFoundPageComponent} from './components/not-found-page/not-found-page.component';
import {AppUrl} from './constants/app-url';


const routes: Routes = [
  {
    path: AppUrl.HOME_PAGE,
    component: HomeComponent
  },
  {
    path: AppUrl.ACCESS_DENIED,
    component: AccessDeniedComponent,
  },
  {
    path: AppUrl.LOGIN,
    component: LoginComponent
  },
  {
    path: AppUrl.REGISTER,
    component: RegisterComponent
  },
  {
    path: AppUrl.NOT_FOUND,
    component: NotFoundPageComponent
  },
  {
    path: '**',
    redirectTo: '404'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
