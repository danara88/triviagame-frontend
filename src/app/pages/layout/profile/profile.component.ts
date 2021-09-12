import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../../services/utils.service';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public identity: User;

  constructor(
    public utilsService: UtilsService,
    private userService: UserService
  ) { 
    this.identity = this.userService.getIdentity()!;
  }

  ngOnInit(): void {
  }

}
