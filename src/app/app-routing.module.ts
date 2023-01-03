import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeRouterComponent } from './home-router/home-router.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthguardGuard } from './shared/authguard.guard';
import { SubscribersComponent } from './subscribers/subscribers.component';

const routes: Routes = [
  {
    path: 'Login', component: LoginComponent
  },
  {
    path: '', component: HomeRouterComponent, 
    canActivate:[AuthguardGuard],
    children :[
      {
        path: '', pathMatch: 'full', redirectTo: 'Home'
      },
      {
        path: 'Home', component: HomeComponent,
      },

      {
        path: 'About', component: AboutComponent,
      },
      {
        path: 'Contact', component: ContactComponent,
      },
      {
        path: 'ListSubscribers', component: SubscribersComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
