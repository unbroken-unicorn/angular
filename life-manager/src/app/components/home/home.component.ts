import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { LifeFormComponent } from '../life-form/life-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  praplusDate: any;
  praplusQuest1: any;
  praplusQuest2: any;
  praplusQuest3: any;

  promisQuest1: any;
  promisQuest2: any;
  promisQuest3C1: any;
  promisQuest3C2: any;
  promisQuest3C3: any;
  promisQuest3C4: any;
  promisQuest3C5: any;
  promisQuest3C6: any;
  promisQuest3C7: any;

  healthhistoryQuest1: any;
  healthhistoryQuest2: any;
  healthhistoryQuest3: any;

  public count = 0;
  public count2 = 0;
  public count3 = 0;
  public totalCount = 3;

  constructor( 
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    // this.praplusDate = localStorage.getItem('praplusDate');
    this.praplusQuest1 = localStorage.getItem('praplusQuest1');
    this.praplusQuest2 = localStorage.getItem('praplusQuest2');
    this.praplusQuest3 = localStorage.getItem('praplusQuest3');

    this.promisQuest1 = localStorage.getItem('promisQuest1');
    this.promisQuest2 = localStorage.getItem('promisQuest2');
    this.promisQuest3C1 = localStorage.getItem('promisQuest3C1');
    this.promisQuest3C2 = localStorage.getItem('promisQuest3C2');
    this.promisQuest3C3 = localStorage.getItem('promisQuest3C3');
    this.promisQuest3C4 = localStorage.getItem('promisQuest3C4');
    this.promisQuest3C5 = localStorage.getItem('promisQuest3C5');
    this.promisQuest3C6 = localStorage.getItem('promisQuest3C6');
    this.promisQuest3C7 = localStorage.getItem('promisQuest3C7');

    this.healthhistoryQuest1 = localStorage.getItem('healthhistoryQuest1');
    this.healthhistoryQuest2 = localStorage.getItem('healthhistoryQuest2');
    this.healthhistoryQuest3 = localStorage.getItem('healthhistoryQuest3');

    if(this.praplusQuest1) {
      this.count++;
    }
    if(this.praplusQuest2) {
      this.count++;
    }
    if(this.praplusQuest3) {
      this.count++;
    }

    if(this.promisQuest1) {
      this.count2++
    }
    if(this.promisQuest2) {
      this.count2++
    }
    if(this.promisQuest3C1 == true || this.promisQuest3C2 == true || this.promisQuest3C3 == true || this.promisQuest3C4 == true || this.promisQuest3C5 == true || this.promisQuest3C6 == true || this.promisQuest3C7 == true) {
      this.count2++
    }

    if(this.healthhistoryQuest1) {
      this.count3++;
    }
    if(this.healthhistoryQuest2) {
      this.count3++;
    }
    if(this.healthhistoryQuest3) {
      this.count3++;
    }
  }

  public openPraPlus(event: any) {
    let info = {
      height: '650px',
      width: '600px',
      data: {
        title: "PraPlus Assessment Test",
        test: 'praplus',
        praplusDate: localStorage.getItem('praplusDate'),
        praplusQuest1: localStorage.getItem('praplusQuest1'),
        praplusQuest2: localStorage.getItem('praplusQuest2'),
        praplusQuest3: localStorage.getItem('praplusQuest3'),
      },
    };
    console.log("Info:");
    console.dir(info);
    const dialogRef = this.dialog.open(LifeFormComponent, info);
    dialogRef.afterClosed().subscribe(result => {
      if (result) { 
        console.log("Result after close:");
        console.dir(result);
        localStorage.setItem('praplusDate', result.data.praplusDate);
        localStorage.setItem('praplusQuest1', result.data.praplusQuest1);
        localStorage.setItem('praplusQuest2', result.data.praplusQuest2);
        localStorage.setItem('praplusQuest3', result.data.praplusQuest3);
        window.location.reload();
      }
    })
  }

  public openPromis(event: any) {
    let info = {
      height: '800px',
      width: '600px',
      data: {
        title: "Promis Assessment Test",
        test: 'promis',
        checkboxValues: [
          { name: 'Breathing Problems', value: 'Breathing Problems' },
          { name: 'High Blood Pressure', value: 'High Blood Pressure' },
          { name: 'Heart Problems', value: 'Heart Problems' },
          { name: 'Urinary Problems', value: 'Urinary Problems' },
          { name: 'Mental Problems', value: 'Mental Problems' },
          { name: 'Ankle Swelling', value: 'Ankle Swelling' },
          { name: 'Cancer', value: 'Cancer' }
      ],
        promisDate: localStorage.getItem('promisDate'),
        promisQuest1: localStorage.getItem('promisQuest1'),
        promisQuest2: localStorage.getItem('promisQuest2'),
        promisQuest3C1: localStorage.getItem('promisQuest3C1'),
        promisQuest3C2: localStorage.getItem('promisQuest3C2'),
        promisQuest3C3: localStorage.getItem('promisQuest3C3'),
        promisQuest3C4: localStorage.getItem('promisQuest3C4'),
        promisQuest3C5: localStorage.getItem('promisQuest3C5'),
        promisQuest3C6: localStorage.getItem('promisQuest3C6'),
        promisQuest3C7: localStorage.getItem('promisQuest3C7'),
        
      },
    };
    const dialogRef = this.dialog.open(LifeFormComponent, info);
    dialogRef.afterClosed().subscribe(result => {
      if (result) { 
        console.log("After Close:");
        console.dir(result);
        localStorage.setItem('promisDate', result.data.promisDate);
        localStorage.setItem('promisQuest1', result.data.promisQuest1);
        localStorage.setItem('promisQuest2', result.data.promisQuest2);
        localStorage.setItem('promisQuest3C1', result.data.promisQuest3C1);
        localStorage.setItem('promisQuest3C2', result.data.promisQuest3C2);
        localStorage.setItem('promisQuest3C3', result.data.promisQuest3C3);
        localStorage.setItem('promisQuest3C4', result.data.promisQuest3C4);
        localStorage.setItem('promisQuest3C5', result.data.promisQuest3C5);
        localStorage.setItem('promisQuest3C6', result.data.promisQuest3C6);
        localStorage.setItem('promisQuest3C7', result.data.promisQuest3C7);
        window.location.reload();
      }
    })
  }

  public openHealthHistory(event: any) {
    let info = {
      height: '800px',
      width: '600px',
      data: {
        title: "Health History Assessment Test",
        test: 'healthhistory',
        healthhistoryDate: localStorage.getItem('healthhistoryDate'),
        healthhistoryQuest1: localStorage.getItem('healthhistoryQuest1'),
        healthhistoryQuest2: localStorage.getItem('healthhistoryQuest2'),
        healthhistoryQuest3: localStorage.getItem('healthhistoryQuest3'),
      },
    };
    const dialogRef = this.dialog.open(LifeFormComponent, info);
    dialogRef.afterClosed().subscribe(result => {
      if (result) { 
        console.log("After Close:");
        console.dir(result);
        localStorage.setItem('healthhistoryDate', result.data.healthhistoryDate);
        localStorage.setItem('healthhistoryQuest1', result.data.healthhistoryQuest1);
        localStorage.setItem('healthhistoryQuest2', result.data.healthhistoryQuest2);
        localStorage.setItem('healthhistoryQuest3', result.data.healthhistoryQuest3);
        window.location.reload();
      }
    })
  }

}
