import { Component } from '@angular/core';
import { Registration } from "./registration/registration";

@Component({
  selector: 'app-user',
  imports: [Registration],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {

}
