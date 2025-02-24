import { Component } from '@angular/core';

type User = {
  name: string;
  age: number;
};
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchValue: string = '';
  users: User[] = [
    {
      name: 'Rahul',
      age: 25,
    },
    { name: 'Rohit', age: 26 },
    { name: 'suresh', age: 25 },
  ];
}
