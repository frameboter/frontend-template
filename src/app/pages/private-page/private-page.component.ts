import { Component } from '@angular/core';
import {PrivateSpaceComponent} from "../../component/private-space/private-space.component";

@Component({
  selector: 'app-private-page',
  standalone: true,
  imports: [
    PrivateSpaceComponent
  ],
  templateUrl: './private-page.component.html',
  styleUrl: './private-page.component.css'
})
export class PrivatePageComponent {

}
