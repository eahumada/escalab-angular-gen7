import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GitHubUserRoutingModule } from './git-hub-user-routing.module';
import { GitHubUserComponent } from './git-hub-user/git-hub-user.component';
import { UserService } from '../services/user.service';


@NgModule({
  declarations: [
    GitHubUserComponent
  ],
  imports: [
    CommonModule,
    GitHubUserRoutingModule
  ],
  exports: [
    GitHubUserComponent
  ],
  providers: [UserService]
})
export class GitHubUserModule { }
