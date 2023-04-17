import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { StudentCard } from '../core/models/warningPendingModels';
import { WarningWebSocketService } from '../share/services/warningWebSocket.service';
import { takeWhile } from 'rxjs';

@Component({
  selector: 'app-warning-pending',
  templateUrl: './warning-pending.component.html',
  styleUrls: ['./warning-pending.component.scss']
})
export class WarningPendingComponent implements OnInit {

  constructor(
    private location: Location,
    private warningWebSocket: WarningWebSocketService
  ) { }

  times: string[] = ['2023-03-06'];
  lists: Record<string, StudentCard[]> = {
    '2023-03-06': [],
  };
  

  ngOnInit(): void {
    this.warningWebSocket.warning$
    .subscribe((x: any) => {
      this.lists['2023-03-06'].push(
        { name: '朴南哲', college: '计算机科学学院', room: 'A#2201', phone: '15827254230', score: '67.5', emptyBed: '39.3%', temperature: '38℃', level: 'one' }
      )
    });
    this.warningWebSocket.handleSubscrib();
  }

  goBack() {
    this.location.back();
  }
}
