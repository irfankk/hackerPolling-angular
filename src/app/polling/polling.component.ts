import { Component, OnInit } from '@angular/core';
import { PollingService } from '../services/polling.service';

@Component({
  selector: 'app-polling',
  templateUrl: './polling.component.html',
  styleUrls: ['./polling.component.scss']
})
export class PollingComponent implements OnInit {
  bestHacker: any;
  hackerList: any;
  constructor(
    private pollingService: PollingService
  ) { }

  ngOnInit() {
    this.getBestHacke();
    this.getHackeList();
  }

  getBestHacke() {
    this.pollingService.bestCandidate().subscribe(
      result =>{
        this.bestHacker = result;
      }
    )
  }

  getHackeList() {
    this.pollingService.listCandidate().subscribe(
      result => {
        this.hackerList = result;
      }
    )
  }

  openCandidate(i) {

  }

}
