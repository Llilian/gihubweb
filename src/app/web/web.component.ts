import { Repo} from '../repo-class/repo';
import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GitService } from './git-servce/git.service';
import {environment} from './environments/environment';
import {RepoRequestService} from '../repo-http/repo-request.service';
import { user } from './user';
import { AlertService } from '../alert-service/alert.service';
// import { DOCUMENT } from '@angular/platform-browser';


@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css'],
  providers: [ GitService, ProfileRequestService, BoltAlertService]
})
export class WebComponent implements OnInit {
  this.http.get<ApiResponse>("http://api.github.com").subscribe(data=>{
    // Succesful API request
    this.repo= new Repo(data.id, data.name, data.html_url, data.description)},err=>{
        this.repo = new Repo("Winston Churchill","Never never give up!")
        console.log("An error occurred")
  })


  git:Git[];
  alertService:AlertService;
  repo:Repo;
  // username='username';
  // repos:Repo[];
  // users: user[];
  //
  // loading = false;
  // errorMessage;
  // windowScrolled: boolean;
  deleteGit(isComplete, index){
      if (isComplete) {
        let toDelete = confirm(`Are you sure you want to delete ${this.git[index].name}?`)

        if (toDelete){
          this.git.splice(index,1)
          this.alertService.alertMe("The git has been deleted")
        }
      }
    }
  constructor(gitservice:Gitservice, repoRequest:RepoRequestService,  alertService:AlertService ) {
    this.git = gitService.getgit()
    this.alertService = alertService
   }


//   public getRepo(event: any) {
//     this.loading = true;
//     // tslint:disable-next-line:prefer-const
//     let promise = new Promise((resolve , reject) => {
//      this.gitService.getRepo (this.userName).toPromise().then(response => {
//        this.repos = response; this.loading = false; // this will push all data to array [repo]
//         resolve();
//       },
//       error => {
//         this.errorMessage = 'An error was encountered';
//         this.loading = false;
//       }
//     );
//     });
//     return promise;
// }
// public getUsers(event: any) {
//   this.loading = true;
//   // tslint:disable-next-line:prefer-const
//   let promise = new Promise((resolve , reject) => {
//    this.profileRequest.getUsers(this.username).toPromise().then(response => {
//      this.users = response; this.loading = false; // this will push all data to array [repo]
//       resolve();
//     },
//     error => {
//       this.errorMessage = 'An error was encountered';
//       this.loading = false;
//     }
//   );
//   });
//   return promise;
// }


  ngOnInit() {
    interface ApiResponse{
     id:string;
     name:string;
     html_url:string
     description:
   }

   this.http.get<ApiResponse>("http://api.github.com").subscribe(
     this.repo= new Repo()
   })
  }
