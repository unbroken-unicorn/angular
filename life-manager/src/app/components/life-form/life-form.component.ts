import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-life-form',
  templateUrl: './life-form.component.html',
  styleUrls: ['./life-form.component.scss']
})
export class LifeFormComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LifeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {

  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

}
