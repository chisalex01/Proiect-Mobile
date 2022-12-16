import { Injectable } from '@angular/core';
import { Person } from '../classes/person';

@Injectable()
export class PersonsService {
  public persons: Person[] = new Array<Person>();
  constructor() {
    this.persons = <Person[]>JSON.parse(localStorage.getItem('PERSONS'));
    if (this.persons == null) {
      this.persons = new Array<Person>();
    }
  }

  public addPerson(p: Person): void {
    this.persons.push(p);
    localStorage.setItem('PERSONS', JSON.stringify(this.persons));
  }
}
