import { AccueilComponent } from './acceuil/accueil/accueil.component';
import { Routes,RouterModule, Route } from "@angular/router";
import { ServiceComponent } from './service/service/service.component';
import { ContactComponent } from './contact/contact/contact.component';

const routes: Routes=[
  {path:'', component: AccueilComponent},
  {path:'contact', component: ContactComponent},
  {path:'service', component: ServiceComponent},
  { path: '**', redirectTo: '' }
];

export const appRoutingModule= RouterModule.forRoot(routes);
