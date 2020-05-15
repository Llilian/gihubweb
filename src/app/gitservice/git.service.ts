import { Injectable } from '@angular/core';
import { WebComponent } from './web/web.component';
@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor() { }
}
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// // tslint:disable-next-line:import-blacklist
// import { Repo } from './repo';
// import {environment} from '../environments/environment';
// @Injectable({
//   providedIn: 'root'
// })



// export class GitService {
//   getGit(){
//     return Git
//   }
//
//   constructor(){}
// }
  // // tslint:disable-next-line:no-inferrable-types
  // baseURL: string = 'https://api.github.com';
  // constructor(private http: HttpClient) {
  // }
  //
  // getRepo(userName: string): < Repo[] > ; {
  //      return this.http.get<Repo[]>(this.baseURL + '/users/' + userName + '/repos');
  // }
