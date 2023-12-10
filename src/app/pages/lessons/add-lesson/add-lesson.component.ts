import { Component } from '@angular/core';
import {
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { LessonService } from '@services/LessonService';
import { GenericService } from '@services/GenericService';

@Component({
  selector: 'app-add-lesson',
  standalone: true,
  templateUrl: './add-lesson.component.html',
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers:[LessonService,GenericService]
})
export class AddLessonComponent {
  loading = false;
  lessonForm = new FormGroup({
    lessonCode: new FormControl(0),
    title: new FormControl(''),
    classNumber: new FormControl(0),
    teacherName: new FormControl(''),
    teacherSurname: new FormControl(''),
  });

  constructor(
    private dialogRef: MatDialogRef<AddLessonComponent>,
    private lessonSercvice: LessonService
  ) {}

  onSubmit() {
    this.loading = true
    this.lessonSercvice
      .saveLesson('/Lesson/PostLesson', this.lessonForm.value)
      .subscribe({
        next: (response: any) => {
          this.dialogRef.close();
          this.loading = false
        },
        error: (error) => {
          this.loading = false;
        }
      });
  }
}
