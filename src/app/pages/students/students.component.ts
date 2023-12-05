import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AddStudentComponent } from './add-student/add-student.component';
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
  selector: 'app-students',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatDialogModule],
  templateUrl: './students.component.html',
  styleUrls: ['./students.components.scss'],
})
export class Students {
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
    this.dialog.open(AddStudentComponent);
  }
}
