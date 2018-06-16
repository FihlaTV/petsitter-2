import { iAnimali } from './../models/Animali';
// Section 1
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

// Section 2
export const ADD_ANIMALI       = '[ANIMALI] Add'
export const REMOVE_ANIMALI    = '[ANIMALI] Remove'

// Section 3
export class AddAnimali implements Action {
    readonly type = ADD_ANIMALI

    constructor(public payload: iAnimali) {}
}

export class RemoveAnimali implements Action {
    readonly type = REMOVE_ANIMALI

    constructor(public payload: number) {}
}

// Section 4
export type Actions = AddAnimali | RemoveAnimali