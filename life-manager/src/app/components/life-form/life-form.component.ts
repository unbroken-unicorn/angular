import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-life-form',
  templateUrl: './life-form.component.html',
  styleUrls: ['./life-form.component.scss']
})
export class LifeFormComponent implements OnInit {

  public LifeForm!: FormGroup;

  constructor(public dialogRef: MatDialogRef<LifeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    console.log('Data Values: ');
    console.dir(this.data);
    this.LifeForm = new FormGroup({
      value1: new FormControl(this.data.val1, []),
      value2: new FormControl(this.data.val2, []),
    })

    this.LifeForm.valueChanges.subscribe((formData: any) => { 
      console.log('Form Value Change');
      console.dir(formData);
      this.data.value1 = formData.value1;
      this.data.value2 = formData.value2;

      console.log('Form Value1 Change: ' + formData.value1);
    })
    
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close({
      mode: 'save',
      data: { 
        value1: this.data.value1, 
        value2: this.data.value2
      }
    });
  }

  complete() {
    this.dialogRef.close({
      mode: 'complete',
      data: { 
        value1: this.data.value1, 
        value2: this.data.value2
      }
    });
  }

}
