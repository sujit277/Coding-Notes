import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { AuthguardService } from './services/authguard.service';

const routes: Routes = [
  {path:'about',component:AboutComponent,canActivate:[AuthguardService]},
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactComponent,canActivate:[AuthguardService]},
  {path:'services',component:ServicesComponent,canActivate:[AuthguardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
