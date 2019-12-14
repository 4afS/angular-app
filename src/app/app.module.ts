import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HelloComponent} from './hello/hello.component';
import {IncrementalSearchComponent} from './incremental-search/incremental-search.component';
import {MessageComponent} from './message/message.component';
import {MystyleDirective} from './mystyle.directive';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    IncrementalSearchComponent,
    MessageComponent,
    MystyleDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [HelloComponent]
})

export class AppModule {}
