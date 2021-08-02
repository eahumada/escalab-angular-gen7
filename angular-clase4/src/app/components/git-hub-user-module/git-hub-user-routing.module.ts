import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitHubUserComponent } from './git-hub-user/git-hub-user.component';

const routes: Routes = [
  {
    path: 'githubuser',
    component: GitHubUserComponent,
    children: [
      { path: '', component:GitHubUserComponent }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GitHubUserRoutingModule { }
