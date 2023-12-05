import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IStudent } from '../../../models/student';

@Component({
  selector: 'app-add-student',
  standalone: true,
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.scss',
  imports: [MatDialogModule, MatButtonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
})

export class AddStudentComponent{
  studentForm = new FormGroup({
    studentNo: new FormControl(''),
    name: new FormControl(''),
    lastName: new FormControl(''),
    classNumber: new FormControl(''),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.studentForm.patchValue(this.data)
  }


  onSubmit() {
    console.log(this.studentForm.value);
  }
}
