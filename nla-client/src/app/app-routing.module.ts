import { TestStoreComponent } from './../pages/test-store/test-store.component';
import { Error404Component } from './../pages/error404/error404.component';
import { NoteDetailPageComponent } from './../pages/note-detail-page/note-detail-page.component';
import { NoteComponent } from './../pages/note/note.component';
import { LabelComponent } from './../pages/label/label.component';
import { RoutesConfig } from './../core/configs/routes.config';
import { HomeComponent } from './../pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routesNames = RoutesConfig.routesNames;
const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:routesNames.home, component: HomeComponent},
  {path:routesNames.labels, component: LabelComponent},
  {path:routesNames.notes, component: NoteComponent},
  {path:routesNames.noteDetail, component: NoteDetailPageComponent},
  {path:routesNames.testStore, component: TestStoreComponent},
  {path: routesNames.error404, component: Error404Component},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
