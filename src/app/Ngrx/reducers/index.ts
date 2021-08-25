import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { premiereActions } from '../main-actions.actions';


export interface State {

}

export const initialState = {}

const myReducers = createReducer(
  initialState,
  on(premiereActions,state => ({ ...state}))
)

export const reducers: ActionReducerMap<State> = {
  main:myReducers
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
