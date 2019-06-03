import { combineReducers } from 'redux';
import allDataReducer from './allDataReducer';
import setErrorReducer from './setErrorReducer';
import isLoadingReducer from './isLoadingReducer';

rootReducer = combineReducers({ allDataReducer, setErrorReducer, isLoadingReducer });
