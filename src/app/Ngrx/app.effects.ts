import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { premiereActions } from './main-actions.actions';
import { map } from 'rxjs/operators';



@Injectable()
export class AppEffects {



  constructor(private actions$: Actions) {}


  someEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(premiereActions),
      map(data => {
        console.log("data from effects",data)
        return data
        
      })
    )
  },{ dispatch: false })

 
    

}
