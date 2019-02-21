import { Injectable } from '@angular/core';
import { RouterModule } from "@angular/router";

// export class User {
//   constructor(
//     public email: string,
//     public password: string) { }
// }
 
// var users = [
//   new User('admin@admin.com','Admin12345')
// ];


@Injectable()
export class AuthentificationService {

  months = [
    {value: 'Dec', viewValue: 'December'},
    {value: 'Jan', viewValue: 'January'},
    {value: 'Feb', viewValue: 'February'},
    {value: 'Mar', viewValue: 'March'},
    {value: 'Apr', viewValue: 'April'},
    {value: 'May', viewValue: 'May'},
    {value: 'Jun', viewValue: 'June'},
    {value: 'Jul', viewValue: 'July'},
    {value: 'Aug', viewValue: 'August'},
    {value: 'Sep', viewValue: 'September'},
    {value: 'Oct', viewValue: 'October'},
    {value: 'Nov', viewValue: 'November'},
  ];

  years = [
    {value: 2017, viewValue: '2017'},
    {value: 2018, viewValue: '2018'},
    {value: 2019, viewValue: '2019'},
    {value: 2020, viewValue: '2020'},
    {value: 2021, viewValue: '2021'}
];

  constructor() { }

}
