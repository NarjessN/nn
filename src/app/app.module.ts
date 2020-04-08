import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { servercomponent } from './server/server.component';
import {servescomponent} from './serves/serves.component';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [
    AppComponent,
    servercomponent,
    servescomponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgModule
  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
