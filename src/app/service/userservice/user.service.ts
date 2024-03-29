import {Injectable} from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import {jwtDecode, JwtPayload} from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public keycloak: KeycloakService) {
    this.getToken().then(s => console.log(s))

  }

  public async getUserName(): Promise<string> {
    return this.keycloak.getUsername();
  }

  public async getRoles(): Promise<string[]> {
    return this.keycloak.getUserRoles(true);
  }

  public async getUserId() {
    const token = await this.getToken();
    return token.sub;
  }


  private async getToken(): Promise<JwtPayload> {
    const token = await this.keycloak.getToken();
    return jwtDecode(token);
  }
}
