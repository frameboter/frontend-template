import { Routes } from '@angular/router';
import {PublicSpaceComponent} from "./component/public/public-space.component";
import {PrivateSpaceComponent} from "./component/private/private-space.component";
import {KeycloakGuard} from "./guard/keycloak.guard";

export const routes: Routes = [
  {path: 'public', component: PublicSpaceComponent},
  {path: 'private', component: PrivateSpaceComponent, canActivate: [KeycloakGuard]},
  {path: '**', component: PublicSpaceComponent}
];
