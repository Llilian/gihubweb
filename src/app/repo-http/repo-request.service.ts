import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';
import { Repo } from '../repo-class/repo';

@Injectable({
  providedIn: 'root'
})
export class RepoRequestService {
      repo:Repo;

    constructor(private http:HttpClient) {
      this.repo = new Repo("","");
     }

     repoRequest(){
       interface ApiResponse{
         id:string;
         name:string;
         html_url:string;
         description:string;
       }
       let promise = new Promise((resolve,reject)=>{
         this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
           this.repo.id = response.id           this.repo.name = response.name
           this.repo.html_url=response.html_url
           this.repo.description=respose.description
           resolve()
         },
         error=>{
           this.repo.id = "Never, never, never give up"
           this.quote.name = "Winston Churchill"

           reject(error)
         })
       })
       return promise
     }
