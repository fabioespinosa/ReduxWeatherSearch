import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action){
  switch(action.type){
    case FETCH_WEATHER:
      //return state.concat([action.payload.data]); // es lo mismo que lo de abajo, nunca manipular el estado
      return [action.payload.data, ...state];
  }
  
  return state;
}
