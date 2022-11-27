import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { User } from '../Model/user';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = { // this requierd for header api
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  url = "https://reqres.in/api/"

  constructor(private http: HttpClient,private router:Router) { }
  // register Api ....................|
  registerApi(data: User): Observable<any> {
    return this.http.post<any>(`${this.url}register`, JSON.stringify(data), this.httpOptions)
      .pipe(map(adduser => {
        return adduser;
      })
      )
  }
  // Login Api ....................|
  loginApi(data: User): Observable<any> {
    return this.http.post<any>(`${this.url}login`, JSON.stringify(data), this.httpOptions)
      .pipe(map(adduser => {
        return adduser;
      })
      )
  }
  loggedIn() {
    return !!localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem('token')
    this.router.navigate(['/'])
  }
  LogoutUser(){
localStorage.removeItem("token")
  }
  // get api
  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.url}users?page=${1}&per_page=${10}`, this.httpOptions).pipe(map(user => {
      return user
    })
    )
  }
  // get current id -----------]
  getCurrentUser(id: any) {
    return this.http.get<any>(`${this.url}users/${id}`, this.httpOptions).pipe(map(user => {
      return user
    })
    )
  }
  // update Api----------------]
  updateUser(id: any, _data: any) {
    return this.http.put<any>(`${this.url}users/${id}`, _data, this.httpOptions).pipe(map(user => {
      return user
    })
    )
  }
  // delete User Api------------------]
  deleteUsers(id: any): Observable<any> {
    return this.http.delete<any>(`${this.url}users/${id}`, this.httpOptions).pipe(map(user => {
      return user
    })
    )
  }
}
