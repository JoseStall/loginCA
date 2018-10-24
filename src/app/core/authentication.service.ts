import { Injectable } from '@angular/core';
import { urlUser } from '../config';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { User } from './models/user.model';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isAuth: boolean = false;

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  searchUser(nickName:string, password:string) {
    const service = this;
    const param = nickName ? 
    {
      params : new HttpParams().set('nick_name', nickName).set('password', password)
    } : {} ;
    
    const obs = this.httpClient.get<User[]>(urlUser, param).subscribe((data) =>
    {
      if (data.length === 1) service.isAuth = true;
  
      else
        service.isAuth = false;
      this.router.navigate(['/calendar'])
    },
    error => service.isAuth = false
    );
  }

  createUser(user: User) {
    this.httpClient.post(urlUser,
      user)
      .subscribe(
        data => {
          console.log("POST Request is successful ", data);
        },
        error => {
          console.log("Rrror", error);
        }
      );
  }
}
