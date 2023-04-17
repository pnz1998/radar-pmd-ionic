import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reason-list',
  templateUrl: './reason-list.component.html',
  styleUrls: ['./reason-list.component.scss']
})
export class ReasonListComponent implements OnInit {
  constructor(
    private bottomSheetRef: MatBottomSheetRef<ReasonListComponent>,
    public dialog: MatDialog
  ) {}

  reasonList: string[] = ['就业压力', '学习问题', '系统误报', '情感问题', '同学矛盾', '家庭矛盾', '身体疾病', '抑郁' ]
  ngOnInit(): void { }

  onClick() {
    this.bottomSheetRef.dismiss(ReasonListComponent);
    this.dialog.open(HintDialog, { width: '250px' })
  }
}

@Component({
  selector: 'app-hint-dialog',
  templateUrl: '../dialog/hint-dialog.component.html',
  styleUrls: ['../dialog/hint-dialog.component.scss']
})
export class HintDialog {
  constructor(
    public dialogRef: MatDialogRef<HintDialog>,
    public dialog: MatDialog,
    private router: Router,
  ) {}

  handleClose() {
    this.dialog.closeAll();
  }
  handleConfirm() {
    this.router.navigate(['/warning-processed']);
    this.dialog.closeAll();
  }
}