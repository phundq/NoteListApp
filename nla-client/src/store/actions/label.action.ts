import { Action } from '@ngrx/store';
export enum ELabelAction {
    ADD_LABEL = "[LABEL] Add",
    UPDATE_LABEL = "[LABEL] Update"
}

export class Add implements Action{
    public readonly type = ELabelAction.ADD_LABEL;
    constructor(public paload: {id: number, name: string}){

    }
}
export class Update implements Action{
    public readonly type = ELabelAction.UPDATE_LABEL;
    constructor(public paload: {id: number, name: string}){

    }
}

export type LabelAction = Add | Update;