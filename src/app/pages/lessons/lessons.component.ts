import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AddLessonComponent } from './add-lesson/add-lesson.component';
import { ILesson, LessonKeys } from '@models/lesson';
import { MatIconModule } from '@angular/material/icon';
import { LessonService } from '@services/LessonService';

@Component({
  selector: 'app-lessons',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatDialogModule, MatIconModule],
  templateUrl: './lessons.component.html',
  providers:[LessonService]
})
export class Lessons {
  dataSource: ILesson[] = [];
  displayedColumns: LessonKeys[] = [
    'lessonCode',
    'classNumber',
    'title',
    'teacherName',
    'teacherSurname',
  ];

  constructor(public dialog: MatDialog, private lessonService: LessonService) {}

  ngOnInit() {
    this.getAllLessons();
  }

  openModal() {
    this.dialog.open(AddLessonComponent);
  }

  getAllLessons() {
    this.lessonService.getAllLessons('/Lesson/GetLessons').subscribe({
      next: (response: any) => {
        this.dataSource = response;
      },
      error(err) {
        console.log('error');
      },
    });
  }
}
