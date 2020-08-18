import { createSelector } from '@ngrx/store';
import { Label } from '../core/model/label';
export interface AppState {
    readonly labels: Label[],
}

export const selectLabel =   (state: AppState) => state.labels;

export const getLabels = createSelector(selectLabel, selectLabel=> selectLabel);