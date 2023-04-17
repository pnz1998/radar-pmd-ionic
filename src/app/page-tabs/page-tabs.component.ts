import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page-tabs',
  templateUrl: './page-tabs.component.html',
  styleUrls: ['./page-tabs.component.scss'],
})
export class PageTabsComponent implements OnInit {
  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {

  }

  onClickHomePage() {

  }
  onClickUserPage() {

  }
}
