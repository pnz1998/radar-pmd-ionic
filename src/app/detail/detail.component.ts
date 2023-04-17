import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ReasonListComponent } from './reason-list/reason-list.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(
    private location: Location,
    private bottomSheet: MatBottomSheet
  ) { }

  ngOnInit(): void { }

  goBack() {
    this.location.back();
  }

  onClick(): void {
    this.bottomSheet.open(ReasonListComponent);
  }
}