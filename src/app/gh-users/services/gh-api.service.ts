import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GUser } from '../models/ghUsers'
import { Repository } from '../models/repositorio';

@Injectable()
export class GhApiService {

  private readonly baseUrl: string ='https://api.github.com/users'

  constructor(
    private http: HttpClient
  ) { }
  findUser(username:string): Observable<GUser> {
    return this.http.get<GUser>(`${this.baseUrl}/${username} `)

  }
  fRepo(username:string): Observable<Repository <any>[]> {
    return this.http.get<Repository < any>[]>(`${this.baseUrl}/${username}/repos `)

  }

}


