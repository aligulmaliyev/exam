import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { GeneralService } from '../../../services/GeneralService';

@Component({
  selector: 'app-add-lesson',
  standalone: true,
  templateUrl: './add-lesson.component.html',
  styleUrl: './add-lesson.component.scss',
  imports: [MatDialogModule, MatButtonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  providers:[GeneralService]
})

export class AddLessonComponent {
  lessonForm = new FormGroup({
    lessonCode: new FormControl(),
    title: new FormControl(''),
    classNumber: new FormControl(),
    teacherName: new FormControl(''),
    teacherSurname: new FormControl(''),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private generalService: GeneralService) { }

  ngOnInit() {
    if (this.data.lessonCode)
      this.lessonForm.patchValue(this.data)
  }


  onSubmit() {
    this.generalService.post('/api/Lesson/PostLesson', this.lessonForm.value)
  }
}
