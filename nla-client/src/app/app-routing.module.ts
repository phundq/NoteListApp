import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';
import { RoutesConfig } from './core/configs/routes.config';
import { Error404Component } from './core/pages/error404/error404.component';
import { LabelComponent } from './core/pages/label/label.component';
import { NoteComponent } from './core/pages/note/note.component';
import { NoteDetailPageComponent } from './core/pages/note-detail-page/note-detail-page.component';

const routesNames = RoutesConfig.routesNames;
const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:routesNames.home, component: HomeComponent},
  {path:routesNames.labels, component: LabelComponent},
  {path:routesNames.notes, component: NoteComponent},
  {path:routesNames.noteDetail, component: NoteDetailPageComponent},
  {path: routesNames.error404, component: Error404Component},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
