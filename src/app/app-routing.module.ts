import { NgModule } from '@angular/core';
import { RouterModule , Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";

const routes : Routes = [
  {path: "auth",component: AuthComponent},
  {path: "",redirectTo:"/auth",pathMatch: 'full'}

];

@NgModule({
  exports:[ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]

})
export class AppRoutingModule { }
