import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DomitoryTable } from '../core/models/dormitoryModels';

@Component({
  selector: 'app-dormitory',
  templateUrl: './dormitory.component.html',
  styleUrls: ['./dormitory.component.scss']
})
export class DormitoryComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  dormitoryTable: DomitoryTable[] = [
    { room: 'A#3301', name: 'A同学', phone: '13478232478', lastState: '是', isBed: '否' },
    { room: 'A#3301', name: 'B同学', phone: '13478232472', lastState: '否', isBed: '否' },
    { room: 'A#3301', name: 'C同学', phone: '13478232473', lastState: '是', isBed: '是' },
    { room: 'A#3301', name: 'D同学', phone: '13478232458', lastState: '是', isBed: '否' },
    { room: 'A#3302', name: 'E同学', phone: '13478232778', lastState: '否', isBed: '是' },
    { room: 'A#3302', name: 'F同学', phone: '13478232478', lastState: '是', isBed: '是' },
    { room: 'A#3303', name: 'G同学', phone: '14578232478', lastState: '是', isBed: '是' },
    { room: 'A#3304', name: 'H同学', phone: '16478232478', lastState: '是', isBed: '是' },
    { room: 'A#3304', name: 'I同学', phone: '16478232978', lastState: '是', isBed: '是' },
    { room: 'A#3304', name: 'J同学', phone: '16478202478', lastState: '是', isBed: '是' }
  ];
  columns: string[] = ['room', 'name', 'phone', 'lastState', 'isBed'];
  ngOnInit(): void {
  }

  goBack() {
    this.location.back();
  }
}
