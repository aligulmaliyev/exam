import { Component } from '@angular/core';
import {
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { StudentService } from '@services/StudentService';
import { GenericService } from '@services/GenericService';

@Component({
  selector: 'app-add-student',
  standalone: true,
  templateUrl: './add-student.component.html',
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  providers: [StudentService,GenericService],
})
export class AddStudentComponent {
  loading = false;
  studentForm = new FormGroup({
    studentNumber: new FormControl(0),
    firstName: new FormControl(''),
    surname: new FormControl(''),
    classNumber: new FormControl(0),
  });

  constructor(
    private dialogRef: MatDialogRef<AddStudentComponent>,
    private studentService: StudentService
  ) {}

  onSubmit() {
    this.loading = true;
    this.studentService
      .saveStudent('/Student/PostStudent', this.studentForm.value)
      .subscribe({
        next: () => {
          this.dialogRef.close();
          this.loading = false;
        },
        error: (error) => {
          this.loading = false;
        },
      });
  }
}
