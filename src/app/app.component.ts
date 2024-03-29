import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Ioannis';

  person0 = {
    givenName: "Ioannis",
    surName: "Skretis",
    age: 44,
    email: "ayeegiannos@gmail.com",
    address: 'Athens, Greece'
  };

  person1 = {
    givenName: "George",
    surName: "Skretis",
    age: 74,
    email: "ayeegiannos2@gmail.com",
    address: 'Athens, Greece'
  };
};
