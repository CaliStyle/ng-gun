import { Action } from '@ngrx/store'
import { type } from '../../../../utils/type.util'

export const ActionTypes = {
  HELLO_WORLD:   type('[Home] Hello World')
}

// Home Hello World
export class HelloWorldAction implements Action {
  type = ActionTypes.HELLO_WORLD
  constructor(public payload: any) { }
}

export type Actions
  = HelloWorldAction
