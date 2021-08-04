import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private userUrl = 'assets/users.json'

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this.userUrl).pipe(
      tap(data =>console.log('All: ' + JSON.stringify(data)))
      // catchError(this.handleError)
    );
  }

 
}
