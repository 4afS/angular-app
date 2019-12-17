import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HelloComponent} from './hello/hello.component';
import {IncrementalSearchComponent} from './incremental-search/incremental-search.component';
import {MessageComponent} from './message/message.component';
import {MystyleDirective} from './mystyle.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialComponent} from './material/material.component';
import {MatButtonModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

const routes: Routes = [
  {path: 'material', component: MaterialComponent},
  {path: 'hello', component: HelloComponent},
  {path: 'msg', component: MessageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    IncrementalSearchComponent,
    MessageComponent,
    MystyleDirective,
    MaterialComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      routes,
      {enableTracing: true}
    ),
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() {
  }
}
