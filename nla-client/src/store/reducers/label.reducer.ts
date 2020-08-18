import { LabelAction, ELabelAction } from './../actions/label.action';
import { Label } from '../../core/model/label';

const initLabelState : Label[] = [];


export function addLabel(state = initLabelState, action: LabelAction){
    switch (action.type){
        case ELabelAction.ADD_LABEL:
            return [...state, action.paload];
        default: return state;
    }

}