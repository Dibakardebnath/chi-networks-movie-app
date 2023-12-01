import {legacy_createStore,applyMiddleware} from 'redux'
import { Reducer } from './Reducer'


export const store =legacy_createStore(Reducer)
