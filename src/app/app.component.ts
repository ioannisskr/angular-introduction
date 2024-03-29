import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Ioannis';

  person = {
    givenName: "Ioannis",
    surName: "Skretis",
    age: 44,
    email: "ayeegiannos@gmail.com"
  }
}
