import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NopagefoundComponent } from './components/nopagefound/nopagefound.component';
import { ComunicacionPadreRoutingModule } from './components/comunicacion-padre/comunicacion-padre-routing.module';
import { GitHubUserRoutingModule } from './components/git-hub-user-module/git-hub-user-routing.module';

const routes: Routes = [
  { path: '', redirectTo: '/comunicacion-padre', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    GitHubUserRoutingModule,
    ComunicacionPadreRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
