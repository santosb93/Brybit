/**
 * ************************************
 *
 * @module  BrybitReducer
 * @author
 * @date
 * @description reducer for brybit data
 *
 * ************************************
 */



import * as types from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  marketList: []
}

const reducer = (state, action) => {

  switch(action.type) {
  case types.IS_FETCHING:
    return {
      ...state,
      isFetching: action.payload
    }
  case types.UPDATE_MARKET_LIST:{
    return{
      ...state,
      marketList: action.payload
    }

  }

    default: return state;
  }



};

export default reducer;