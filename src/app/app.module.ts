import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from "@angular/forms";
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
