import { Component, OnInit } from '@angular/core';
import { Ranking } from 'src/app/models/ranking.model';
import { RankingService } from '../../services/ranking.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { UtilsService } from '../../services/utils.service';
import { MessageService } from 'primeng/api';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  public topNumber: number;
  public rankings: Ranking[];
  public identity: User | null;

  constructor(
    private rankingService: RankingService,
    private utilsService: UtilsService,
    private userService: UserService,
    private messageService: MessageService,
    private spinner: NgxSpinnerService,
  ) {
    this.topNumber = 5;
    this.rankings = [];
    this.identity = this.userService.getIdentity();
  }

  ngOnInit(): void {

    this.getTopRankings(this.topNumber);

  }

  /**
   * This method will get the top ranking players
   * @param topNumber 
   */
  getTopRankings(topNumber: number) {
    this.spinner.show();

    this.rankingService.getTopRankings(topNumber).subscribe(resp => {
      this.rankings = resp.rankings;
      this.spinner.hide();
     
    }, error => {
      console.log(error);
      this.spinner.hide();
      this.utilsService.showToastMessage('rankingPage', 'error', 'Error getting rankings', 'Something went wrong. We could not get ranking players.', this.messageService);
    })
  }

}
