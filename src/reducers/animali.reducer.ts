import { iAnimali } from './../models/Animali';
import { Action } from '@ngrx/store';
import * as AnimaliActions from './../actions/animali.action'

// Section 1
const initialState: iAnimali = {
    id: 1,
    razza: 'cane'
}

// Section 2
export function reducer(state: iAnimali[] = [initialState], action: AnimaliActions.Actions) {

    // Section 3
    switch (action.type) {
        case AnimaliActions.ADD_ANIMALI:
            return [...state, action.payload];
        default:
            return state;
    }
}