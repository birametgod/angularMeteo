import { NgModule } from '@angular/core';
import { RouterModule , Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { MeteoComponent } from "./meteo/meteo.component";

const routes : Routes = [
  {path: "auth",component: AuthComponent},
  {path: "meteo", component: MeteoComponent},
  {path: "",redirectTo:"/auth",pathMatch: 'full'}
];

@NgModule({
  exports:[ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]

})
export class AppRoutingModule { }
