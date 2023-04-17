import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-warning-analysis',
  templateUrl: './warning-analysis.component.html',
  styleUrls: ['./warning-analysis.component.scss']
})
export class WarningAnalysisComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back();
  }

}
