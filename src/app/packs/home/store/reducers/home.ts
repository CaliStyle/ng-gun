import { actions } from '../actions'

export interface State {
  title: string | null
}

export const initialState: State = {
  title: null
}


export function reducer(state = initialState, action: actions.Actions): State {
  switch (action.type) {
    case actions.ActionTypes.HELLO_WORLD: {
      return Object.assign({}, state, {title: action.payload })
    }
    default: {
      return state
    }
  }
}
