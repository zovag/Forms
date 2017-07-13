import { Injectable } from '@angular/core';
import { RouterModule } from "@angular/router";

export class User {
  constructor(
    public email: string,
    public password: string) { }
}
 
var users = [
  new User('admin@admin.com','Admin12345')
];


@Injectable()
export class AuthentificationService {

  constructor() { }

}
