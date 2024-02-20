import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['angular', 'react', 'view']

  userModel = new User('Rob', 'rob@gmail.com', 7208168601, '', 'morning', true)

}
