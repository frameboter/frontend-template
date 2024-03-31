import {KeycloakBearerInterceptor, KeycloakService} from "keycloak-angular";
import {APP_INITIALIZER, Provider} from "@angular/core";
import {HTTP_INTERCEPTORS} from "@angular/common/http";

export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'https://keycloak.roboter5123.com',
        realm: 'robolock',
        clientId: 'test',
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',

      },
      loadUserProfileAtStartUp: true,
      enableBearerInterceptor: true,
      bearerPrefix: 'Bearer'
    });
}

// Provider for Keycloak Bearer Interceptor
export const KeycloakBearerInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: KeycloakBearerInterceptor,
  multi: true
};

// Provider for Keycloak Initialization
export const KeycloakInitializerProvider: Provider = {
  provide: APP_INITIALIZER,
  useFactory: initializeKeycloak,
  multi: true,
  deps: [KeycloakService]
}
