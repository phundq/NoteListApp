import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { NoteFormEditComponent } from './../core/components/note/note-form-edit/note-form-edit.component';
import { NoteDetailPageComponent } from './../pages/note-detail-page/note-detail-page.component';
import { LabelsComponent } from './../core/components/labels/labels.component';
import { NoteComponent } from './../pages/note/note.component';
import { LabelComponent } from './../pages/label/label.component';
import { ListNotesComponent } from './../core/components/note/list-notes/list-notes.component';
import { NoteDetailComponent } from './../core/components/note/note-detail/note-detail.component';
import { LayoutComponent } from './../core/components/layout/layout.component';
import { ContentComponent } from './../core/components/content/content.component';
import { TriggerIconComponent } from './../core/components/trigger-icon/trigger-icon.component';
import { FooterComponent } from './../core/components/footer/footer.component';
import { HeaderComponent } from './../core/components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { uk_UA } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import uk from '@angular/common/locales/uk';
import { HomeComponent } from 'src/pages/home/home.component';
import { Error404Component } from 'src/pages/error404/error404.component';

registerLocaleData(uk);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component,
    HeaderComponent,
    FooterComponent,
    TriggerIconComponent,
    ContentComponent,
    LayoutComponent,
    NoteDetailComponent,
    ListNotesComponent,
    LabelComponent,
    NoteComponent,
    LabelsComponent,
    NoteDetailPageComponent,
    NoteFormEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: uk_UA }],
  bootstrap: [AppComponent]
})
export class AppModule { }
