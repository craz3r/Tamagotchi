import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';

const currentUserState = handleActions(
  {
    [actions.enterName](state, { payload }) {
      localStorage.setItem('user', JSON.stringify(payload));
      return { ...state, currentUserName: payload.currentUserName };
    }
  },
  {}
);

export default combineReducers({
  currentUserState,
  form: formReducer
});
