import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { StudentCard } from '../core/models/warningPendingModels';


@Component({
  selector: 'app-warning-processed',
  templateUrl: './warning-processed.component.html',
  styleUrls: ['./warning-processed.component.scss']
})
export class WarningProcessedComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  times: string[] = ['2023-03-02', '2023-03-03']
  lists: Record<string, StudentCard[]> = {
    '2023-03-02': [
      { name: '朴南哲', college: '计算机科学学院', room: 'A#2201', phone: '15827254230', score: '67.5', emptyBed: '39.3%', temperature: '38℃', level: 'one', reason: '体温超温' },
      { name: '李知恩', college: '计算机科学学院', room: 'A#2201', phone: '15822254230', score: '67.5', emptyBed: '39.3%', temperature: '38℃', level: 'two', reason: '体温超温' },
    ],
    '2023-03-03': [
      { name: '赵美研', college: '计算机科学学院', room: 'A#2201', phone: '15527254230', score: '67.5', emptyBed: '39.3%', temperature: '38℃', level: 'three', reason: '体温超温' },
    ]
  } 

  ngOnInit(): void {
  }

  goBack() {
    this.location.back();
  }
}
