import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-add-exam',
  standalone: true,
  templateUrl: './add-exam.component.html',
  styleUrl: './add-exam.component.scss',
  imports: [MatDialogModule, MatButtonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
})

export class AddExamComponent {
  examForm = new FormGroup({
    classNumber: new FormControl(''),
    studentNo: new FormControl(''),
    date: new FormControl(''),
    grade: new FormControl(''),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.examForm.patchValue(this.data)
  }

  onSubmit() {
    console.log(this.examForm.value);
  }
}
