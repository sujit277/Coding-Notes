import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {LoginComponent} from "./login/login.component";

//Group Routing
/* const routes: Routes = [
  {
  path:"admin",children:[
  {path:"login", component:LoginComponent},
  {path:"list", component:ListComponent}]
  }
]; */

//Lazy Loading
const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"list", component:ListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
