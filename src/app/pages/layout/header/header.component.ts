import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public identity: User | null;

  constructor(
    private userService: UserService
  ) {

    this.identity = this.userService.getIdentity();

  }

  /**
   * Get the first letter of the username
   */
  get firstLetter(): string {
    if(this.identity) {
      return this.identity?.fullName[0].toUpperCase();
    }
    return "Error";
  }

  ngOnInit(): void {
  }

  /**
   * Log out user
   */
  logout() {
    this.userService.logout();
  }

}
