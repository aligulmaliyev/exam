import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AddExamComponent } from './add-exam/add-exam.component';
import { ILesson } from '../../models/lesson';


const ELEMENT_DATA: ILesson[] = [
  {
    id: 1,
    lessonNumber: 12131,
    class: 2,
    lessonName: 'Eng',
    teacherName: 'Elcin',
    teacherLastName: 'Huseynov',
  },
  {
    id: 2,
    lessonNumber: 2242,
    class: 13,
    lessonName: 'Rus',
    teacherName: 'Vasif',
    teacherLastName: 'Huseynov',
  },
];

@Component({
  selector: 'app-exams',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatDialogModule],
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.components.scss'],
})
export class Exams {
  displayedColumns: string[] = [
    'id',
    'lessonNumber',
    'lessonName',
    'class',
    'teacherName',
    'teacherLastName',
  ];
  dataSource = ELEMENT_DATA;
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AddExamComponent);
  }
}
