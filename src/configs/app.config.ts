import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from '../app/app.routes';
import {KeycloakService} from "keycloak-angular";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {KeycloakBearerInterceptorProvider, KeycloakInitializerProvider} from "./keycloak.config";


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptorsFromDi()), // Provides HttpClient with interceptors
    KeycloakInitializerProvider, // Initializes Keycloak
    KeycloakBearerInterceptorProvider, // Provides Keycloak Bearer Interceptor
    KeycloakService, // Service for Keycloak
    provideRouter(routes) // Provides routing for the application
  ]
};
