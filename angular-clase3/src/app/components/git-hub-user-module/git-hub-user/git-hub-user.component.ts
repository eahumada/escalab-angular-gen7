import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-git-hub-user',
  templateUrl: './git-hub-user.component.html',
  styleUrls: ['./git-hub-user.component.scss']
})
export class GitHubUserComponent implements OnInit {

	public users: Array<any> = [];

	// Inyecta el servicio en la variable _userService de la clase, declarada implícitamente 
	constructor(private _userService: UserService) {
    console.log('GitHubUserComponent constructor');    
  }

  ngOnInit(): void {
    this.getUser();
  }
	
  private getUser(): void { 
		this._userService.getAll().subscribe((users) => {
			this.users = users;
		});
	}

}
