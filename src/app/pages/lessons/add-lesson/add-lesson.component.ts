import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ILesson } from '../../../models/lesson';

@Component({
  selector: 'app-add-lesson',
  standalone: true,
  templateUrl: './add-lesson.component.html',
  styleUrl: './add-lesson.component.scss',
  imports: [MatDialogModule, MatButtonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
})

export class AddLessonComponent {
  lessonForm = new FormGroup({
    lessonNumber: new FormControl(''),
    lessonName: new FormControl(''),
    classNumber: new FormControl(''),
    teacherName: new FormControl(''),
    teacherLastName: new FormControl(''),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}

  ngOnInit() {
    this.lessonForm.patchValue(this.data)
  }


  onSubmit() {
    console.log(this.lessonForm.value);
  }
}
