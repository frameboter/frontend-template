import {Component} from '@angular/core';
import {UserService} from "../../service/userservice/user.service";
import {HttpService} from "../../service/httpservice/http.service";

@Component({
  selector: 'app-private-space',
  standalone: true,
  imports: [],
  templateUrl: './private-space.component.html',
  styleUrl: './private-space.component.css'
})
export class PrivateSpaceComponent {

  protected userName: string | undefined
  protected userId: string | undefined
  protected roles: string[] | undefined

  constructor(protected userservice: UserService, protected httpService: HttpService) {

    httpService.sendPostRequest("template", "ping", null).subscribe(object => console.log(object))
    userservice.getRoles().then(roles => this.roles = roles);
    userservice.getUserName().then(userName => this.userName = userName);
    userservice.getUserId().then(userId => this.userId = userId)
  }
}
