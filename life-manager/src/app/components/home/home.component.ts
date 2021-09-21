import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { LifeFormComponent } from '../life-form/life-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( 
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
  }

  public openPraPlus(event: any) {
    var value1 = localStorage.getItem('Value1');
    var value2 = localStorage.getItem('Value2');
    let info = {
      height: '400px',
      width: '600px',
      data: {
        title: "PraPlus Assessment Test",
        test: 'praplus',
        val1: value1,
        val2: value2
      },
    };
    const dialogRef = this.dialog.open(LifeFormComponent, info);
    console.log("Event:");
    console.dir(event);
    dialogRef.afterClosed().subscribe(result => {
      if (result) { 
        console.log("After Close:");
        console.dir(result);
        localStorage.setItem('Value1', result.data.value1);
        localStorage.setItem('Value2', result.data.value2);
      }
    })
  }

  public openPromis(event: any) {
    var value1 = localStorage.getItem('Value1');
    var value2 = localStorage.getItem('Value2');
    let info = {
      height: '400px',
      width: '600px',
      data: {
        title: "Promis Assessment Test",
        test: 'promis',
        val1: value1,
        val2: value2
      },
    };
    const dialogRef = this.dialog.open(LifeFormComponent, info);
    console.log("Event:");
    console.dir(event);
    dialogRef.afterClosed().subscribe(result => {
      if (result) { 
        console.log("After Close:");
        console.dir(result);
        localStorage.setItem('Value1', result.data.value1);
        localStorage.setItem('Value2', result.data.value2);
      }
    })
  }

  public openHealthHistory(event: any) {
    var value1 = localStorage.getItem('Value1');
    var value2 = localStorage.getItem('Value2');
    let info = {
      height: '400px',
      width: '600px',
      data: {
        title: "Health History Assessment Test",
        test: 'healthhistory',
        val1: value1,
        val2: value2
      },
    };
    const dialogRef = this.dialog.open(LifeFormComponent, info);
    console.log("Event:");
    console.dir(event);
    dialogRef.afterClosed().subscribe(result => {
      if (result) { 
        console.log("After Close:");
        console.dir(result);
        localStorage.setItem('Value1', result.data.value1);
        localStorage.setItem('Value2', result.data.value2);
      }
    })
  }

}
