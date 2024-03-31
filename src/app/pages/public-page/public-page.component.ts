import { Component } from '@angular/core';
import {PublicSpaceComponent} from "../../component/public-space/public-space.component";

@Component({
  selector: 'app-public-page',
  standalone: true,
  imports: [
    PublicSpaceComponent
  ],
  templateUrl: './public-page.component.html',
  styleUrl: './public-page.component.css'
})
export class PublicPageComponent {

}
