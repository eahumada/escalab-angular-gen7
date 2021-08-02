import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { ComunicacionPadreRoutingModule } from './pages/comunicacion-padre/comunicacion-padre-routing.module';
import { GitHubUserRoutingModule } from './components/git-hub-user-module/git-hub-user-routing.module';
import { TypicodeRoutingModule } from './pages/typicode/typicode-routing.module';

const routes: Routes = [
  { path: '', redirectTo: '/comunicacion-padre', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    GitHubUserRoutingModule,
    ComunicacionPadreRoutingModule,
    TypicodeRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
