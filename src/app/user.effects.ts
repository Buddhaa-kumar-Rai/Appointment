import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as userAction from './user.actions'
import { UsersService } from './users.service';



@Injectable()
export class UserEffects {



  constructor(private actions$: Actions, private userService: UsersService) {}

  @Effect()
  loadUsers$: Observable<Action> = this.actions$.pipe(
    ofType(userAction.UserActionTypes.LoadUsers),
    mergeMap(
      action => this.userService.getUsers().pipe(
        map((users:any) => (new userAction.LoadUsersSuccess({data: users}))),
        catchError(err => of(new userAction.LoadUsersFailure({error: err})))
      )
    )
  )

}
