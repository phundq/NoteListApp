import {InjectionToken} from '@angular/core';
export let ROUTES_CONFIG = new InjectionToken('routes.config');

const routesNames = {
    home: 'home',
    labels: 'labels',
    notes: 'notes',
    noteDetail: 'note-detail',
    testStore: 'test-store',
    error404: '404',
}

export const RoutesConfig: any = {
    routesNames,
    routes: {
        home: `/${routesNames.home}`, 
        labels: `/${routesNames.labels}`, 
        notes: `/${routesNames.notes}`, 
        noteDetail: `/${routesNames.noteDetail}`, 
        testStore: `/${routesNames.testStore}`, 
        error404: `/${routesNames.error404}`
    }
}