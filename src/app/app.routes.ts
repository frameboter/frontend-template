import {Routes} from '@angular/router';
import {PublicSpaceComponent} from "./component/public-space/public-space.component";
import {KeycloakGuard} from "./guard/keycloak.guard";
import {PrivatePageComponent} from "./pages/private-page/private-page.component";
import {PublicPageComponent} from "./pages/public-page/public-page.component";

export const routes: Routes = [
  {path: 'public', component: PublicPageComponent},
  {path: 'private', component: PrivatePageComponent, canActivate: [KeycloakGuard]},
  {path: '**', component: PublicSpaceComponent}
];
