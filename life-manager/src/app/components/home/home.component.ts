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
    let info = {
      data: {
        title: "PraPlus Assessment Test",
        val1: "Testing value 1",
        val2: "Testing value 2"
      },
    };
    this.dialog.open(LifeFormComponent, info);
    console.log("Event:");
    console.dir(event);
  }

  public openPromis(event: any) {
    let info = {
      data: {
        title: "Promis Assessment Test",
        val1: "Testing value 1",
        val2: "Testing value 2"
      },
    };
    this.dialog.open(LifeFormComponent, info);
    console.log("Event:");
    console.dir(event);
  }

  public openHealthHistory(event: any) {
    let info = {
      data: {
        title: "Health History Assessment Test",
        val1: "Testing value 1",
        val2: "Testing value 2"
      },
    };
    this.dialog.open(LifeFormComponent, info);
    console.log("Event:");
    console.dir(event);
  }

}
