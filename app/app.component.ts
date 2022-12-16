import { Component } from '@angular/core';
import { Person } from './classes/person';
import { PersonsService } from './services/persons.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public person: Person = new Person();

  constructor(public personsService: PersonsService) {}

  public clearForm() {
    this.person = new Person();
  }

  public save() {
    this.personsService.addPerson(this.person);
    this.person = new Person();
  }

  public edit() {}

  public delete() {}
}
