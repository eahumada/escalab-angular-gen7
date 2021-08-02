import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComunicacionPadreModule } from './pages/comunicacion-padre/comunicacion-padre.module';
import { GitHubUserModule } from './components/git-hub-user-module/git-hub-user.module';
import { TypicodeModule } from './pages/typicode/typicode.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComunicacionPadreModule,
    GitHubUserModule,
    TypicodeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
