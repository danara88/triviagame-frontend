import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from '../../../services/user.service';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public identity: User | null;

  constructor(
    private userService: UserService,
    public utilsService: UtilsService,
  ) {

    this.identity = this.userService.getIdentity();

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
