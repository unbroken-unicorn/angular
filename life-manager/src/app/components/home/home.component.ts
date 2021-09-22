import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { LifeFormComponent } from '../life-form/life-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  praplusTestCompleted: any;
  praplusDate: any;
  praplusQuest1: any;
  praplusQuest2: any;
  praplusQuest3: any;

  promisTestCompleted: any;
  promisQuest1: any;
  promisQuest2: any;
  promisQuest3C1: any;
  promisQuest3C2: any;
  promisQuest3C3: any;
  promisQuest3C4: any;
  promisQuest3C5: any;
  promisQuest3C6: any;
  promisQuest3C7: any;

  healthhistoryTestCompleted: any;
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
    // Retrieve items from localStorage to get questions completed count
    this.praplusTestCompleted = localStorage.getItem('praplusTestCompleted');
    this.praplusQuest1 = localStorage.getItem('praplusQuest1');
    this.praplusQuest2 = localStorage.getItem('praplusQuest2');
    this.praplusQuest3 = localStorage.getItem('praplusQuest3');

    this.promisTestCompleted = localStorage.getItem('promisTestCompleted');
    this.promisQuest1 = localStorage.getItem('promisQuest1');
    this.promisQuest2 = localStorage.getItem('promisQuest2');
    this.promisQuest3C1 = localStorage.getItem('promisQuest3C1');
    this.promisQuest3C2 = localStorage.getItem('promisQuest3C2');
    this.promisQuest3C3 = localStorage.getItem('promisQuest3C3');
    this.promisQuest3C4 = localStorage.getItem('promisQuest3C4');
    this.promisQuest3C5 = localStorage.getItem('promisQuest3C5');
    this.promisQuest3C6 = localStorage.getItem('promisQuest3C6');
    this.promisQuest3C7 = localStorage.getItem('promisQuest3C7');

    this.healthhistoryTestCompleted = localStorage.getItem('healthhistoryTestCompleted');
    this.healthhistoryQuest1 = localStorage.getItem('healthhistoryQuest1');
    this.healthhistoryQuest2 = localStorage.getItem('healthhistoryQuest2');
    this.healthhistoryQuest3 = localStorage.getItem('healthhistoryQuest3');

    // Question counts
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
    if(this.promisQuest3C1 ===true || this.promisQuest3C2 === true || this.promisQuest3C3 === true || this.promisQuest3C4 === true || this.promisQuest3C5 === true || this.promisQuest3C6 === true || this.promisQuest3C7 === true) {
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

  // Open PraPlus assessment test
  public openPraPlus(event: any) {

    // Send info to modal
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
    // Open modal
    const dialogRef = this.dialog.open(LifeFormComponent, info);

    // After modal closed, save data to localStorage
    dialogRef.afterClosed().subscribe(result => {
      if (result) { 
        localStorage.setItem('praplusDate', result.data.praplusDate);
        localStorage.setItem('praplusQuest1', result.data.praplusQuest1);
        localStorage.setItem('praplusQuest2', result.data.praplusQuest2);
        localStorage.setItem('praplusQuest3', result.data.praplusQuest3);

        // If completed checked, question marked as complete
        if (result.mode === 'complete') {
          localStorage.setItem('praplusTestCompleted', "true");
        }

        // Reload calling window
        window.location.reload();
      }
    })
  }

  // Open Promis assessment test
  public openPromis(event: any) {

    // Send info to modal
    let info = {
      height: '800px',
      width: '600px',
      data: {
        title: "Promis Assessment Test",
        test: 'promis',
        checkboxValues: [
          { name: 'Breathing Problems', value: 'Breathing Problems', field: 'promisQuest3C1' },
          { name: 'High Blood Pressure', value: 'High Blood Pressure', field: 'promisQuest3C2' },
          { name: 'Heart Problems', value: 'Heart Problems', field: 'promisQuest3C3' },
          { name: 'Urinary Problems', value: 'Urinary Problems', field: 'promisQuest3C4' },
          { name: 'Mental Problems', value: 'Mental Problems', field: 'promisQuest3C5' },
          { name: 'Ankle Swelling', value: 'Ankle Swelling', field: 'promisQuest3C6' },
          { name: 'Cancer', value: 'Cancer', field: 'promisQuest3C7' }
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
        promisQuest3C7: localStorage.getItem('promisQuest3C7')
        
      },
    };

    // Open modal
    const dialogRef = this.dialog.open(LifeFormComponent, info);

    // After modal closed, save data to localStorage
    dialogRef.afterClosed().subscribe(result => {
      if (result) { 
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
        
        // If completed checked, question marked as complete
        if (result.mode === 'complete') {
          localStorage.setItem('promisTestCompleted', "true");
        }

        // Reload calling window
        window.location.reload();
      }
    })
  }

  // Open Health History assessment test
  public openHealthHistory(event: any) {

    // Send info to modal
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

    // Open modal
    const dialogRef = this.dialog.open(LifeFormComponent, info);

    // After modal closed, save data to localStorage
    dialogRef.afterClosed().subscribe(result => {
      if (result) { 
        localStorage.setItem('healthhistoryDate', result.data.healthhistoryDate);
        localStorage.setItem('healthhistoryQuest1', result.data.healthhistoryQuest1);
        localStorage.setItem('healthhistoryQuest2', result.data.healthhistoryQuest2);
        localStorage.setItem('healthhistoryQuest3', result.data.healthhistoryQuest3);

        // If completed checked, question marked as complete
        if (result.mode === 'complete') {
          localStorage.setItem('healthhistoryTestCompleted', "true");
        }

        // Reload calling window
        window.location.reload();
      }
    })
  }

}
