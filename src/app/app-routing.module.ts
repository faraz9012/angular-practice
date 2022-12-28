import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SubscribersComponent } from './subscribers/subscribers.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'About', component: AboutComponent
  },
  {
    path: 'Contact', component: ContactComponent
  },
  {
    path: 'ListSubscribers', component: SubscribersComponent
  },
  {
    path: 'Login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
