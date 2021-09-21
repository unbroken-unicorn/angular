import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

import * as _moment from 'moment';
const moment = _moment;


@Component({
  selector: 'app-life-form',
  templateUrl: './life-form.component.html',
  styleUrls: ['./life-form.component.scss']
})
export class LifeFormComponent implements OnInit {

  public LifeForm!: FormGroup;

  constructor(
    // private FormBuilder: FormBuilder,
    public dialogRef: MatDialogRef<LifeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    dialogRef.disableClose = true;
    // this.LifeForm = this.FormBuilder.group({
    //   checkArray: this.FormBuilder.array([])
    // })
  }

  ngOnInit(): void {
    console.log('Data Values: ');
    console.dir(this.data);
    this.LifeForm = new FormGroup({
      praplusDate: new FormControl(this.data.praplusDate, []),
      praplusQuest1: new FormControl(this.data.praplusQuest1, []),
      praplusQuest2: new FormControl(this.data.praplusQuest2, []),
      praplusQuest3: new FormControl(this.data.praplusQuest3, []),
      promisDate: new FormControl(this.data.promisDate, []),
      promisQuest1: new FormControl(this.data.promisQuest1, []),
      promisQuest2: new FormControl(this.data.promisQuest2, []),
      promisQuest3C1: new FormControl(this.data.promisQuest3C1, []),
      promisQuest3C2: new FormControl(this.data.promisQuest3C2, []),
      promisQuest3C3: new FormControl(this.data.promisQuest3C3, []),
      promisQuest3C4: new FormControl(this.data.promisQuest3C4, []),
      promisQuest3C5: new FormControl(this.data.promisQuest3C5, []),
      promisQuest3C6: new FormControl(this.data.promisQuest3C6, []),
      promisQuest3C7: new FormControl(this.data.promisQuest3C7, []),
      healthhistoryDate: new FormControl(this.data.healthhistoryDate, []),
      healthhistoryQuest1: new FormControl(this.data.healthhistoryQuest1, []),
      healthhistoryQuest2: new FormControl(this.data.healthhistoryQuest2, []),
      healthhistoryQuest3: new FormControl(this.data.healthhistoryQuest3, [])
    })

    this.LifeForm.valueChanges.subscribe((formData: any) => { 
      console.log('Form Value Change');
      console.dir(formData);
      this.data.praplusDate = formData.praplusDate;
      this.data.praplusQuest1 = formData.praplusQuest1;
      this.data.praplusQuest2 = formData.praplusQuest2;
      this.data.praplusQuest3 = formData.praplusQuest3;
      this.data.promisDate = formData.promisDate;
      this.data.promisQuest1 = formData.promisQuest1;
      this.data.promisQuest2 = formData.promisQuest2;
      this.data.promisQuest3C1 = formData.promisQuest3C1;
      this.data.promisQuest3C2 = formData.promisQuest3C2;
      this.data.promisQuest3C3 = formData.promisQuest3C3;
      this.data.promisQuest3C4 = formData.promisQuest3C4;
      this.data.promisQuest3C5 = formData.promisQuest3C5;
      this.data.promisQuest3C6 = formData.promisQuest3C6;
      this.data.promisQuest3C7 = formData.promisQuest3C7;
      this.data.healthhistoryDate = formData.healthhistoryDate;
      this.data.healthhistoryQuest1 = formData.healthhistoryQuest1;
      this.data.healthhistoryQuest2 = formData.healthhistoryQuest2;
      this.data.healthhistoryQuest3 = formData.healthhistoryQuest3;
    })
    
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close({
      mode: 'save',
      data: { 
        praplusDate: this.data.praplusDate, 
        praplusQuest1: this.data.praplusQuest1, 
        praplusQuest2: this.data.praplusQuest2, 
        praplusQuest3: this.data.praplusQuest3, 
        promisDate: this.data.promisDate, 
        promisQuest1: this.data.promisQuest1, 
        promisQuest2: this.data.promisQuest2, 
        promisQuest3C1: this.data.promisQuest3C1, 
        promisQuest3C2: this.data.promisQuest3C2, 
        promisQuest3C3: this.data.promisQuest3C3, 
        promisQuest3C4: this.data.promisQuest3C4, 
        promisQuest3C5: this.data.promisQuest3C5, 
        promisQuest3C6: this.data.promisQuest3C6, 
        promisQuest3C7: this.data.promisQuest3C7, 
        healthhistoryDate: this.data.healthhistoryDate, 
        healthhistoryQuest1: this.data.healthhistoryQuest1, 
        healthhistoryQuest2: this.data.healthhistoryQuest2, 
        healthhistoryQuest3: this.data.healthhistoryQuest3
      }
    });
  }

  complete() {
    this.dialogRef.close({
      mode: 'complete',
      data: { 
        praplusDate: this.data.praplusDate, 
        praplusQuest1: this.data.praplusQuest1, 
        praplusQuest2: this.data.praplusQuest2, 
        praplusQuest3: this.data.praplusQuest3, 
        promisDate: this.data.promisDate, 
        promisQuest1: this.data.promisQuest1, 
        promisQuest2: this.data.promisQuest2, 
        promisQuest3C1: this.data.promisQuest3C1, 
        promisQuest3C2: this.data.promisQuest3C2, 
        promisQuest3C3: this.data.promisQuest3C3, 
        promisQuest3C4: this.data.promisQuest3C4, 
        promisQuest3C5: this.data.promisQuest3C5, 
        promisQuest3C6: this.data.promisQuest3C6, 
        promisQuest3C7: this.data.promisQuest3C7, 
        healthhistoryDate: this.data.healthhistoryDate, 
        healthhistoryQuest1: this.data.healthhistoryQuest1, 
        healthhistoryQuest2: this.data.healthhistoryQuest2, 
        healthhistoryQuest3: this.data.healthhistoryQuest3
      }
    });
  }

  // onCheckboxChange(e : any) {
  //   const checkArray: FormArray = this.LifeForm.get('checkArray') as FormArray;
  
  //   if (e.target.checked) {
  //     checkArray.push(new FormControl(e.target.value));
  //   } else {
  //     let i: number = 0;
  //     checkArray.controls.forEach((ctrl: FormControl) => {
  //       if (ctrl.value == e.target.value) {
  //         checkArray.removeAt(i);
  //         return;
  //       }
  //       i++;
  //     });
  //   }
  // }

}
