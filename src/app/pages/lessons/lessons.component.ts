import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AddLessonComponent } from './add-lesson/add-lesson.component';
import { ILesson } from '../../models/lesson';
import { GeneralService } from '../../services/GeneralService';
import { baseUrl } from '../../constants/api';
import {MatIconModule} from '@angular/material/icon';

const ELEMENT_DATA: ILesson[] = [
  {
    id: 1,
    lessonNumber: 12131,
    classNumber: 2,
    lessonName: 'Eng',
    teacherName: 'Elcin',
    teacherLastName: 'Huseynov',
  },
  {
    id: 2,
    lessonNumber: 2242,
    classNumber: 13,
    lessonName: 'Rus',
    teacherName: 'Vasif',
    teacherLastName: 'Huseynov',
  },
];

@Component({
  selector: 'app-lessons',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatDialogModule,MatIconModule],
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.components.scss'],
})
export class Lessons {
  displayedColumns: string[] = [
    'id',
    'lessonNumber',
    'lessonName',
    'classNumber',
    'teacherName',
    'teacherLastName',
    'action'
  ];
  dataSource = ELEMENT_DATA;
  editData: ILesson = {} as ILesson;
  constructor(public dialog: MatDialog, private gereralService: GeneralService) { }

  ngOnInit() {
   this.getAllLessons()
  }
  
  openDialog() {
    this.dialog.open(AddLessonComponent, { data: this.editData });
  }

  getAllLessons() {
    this.gereralService.getAll(`${baseUrl}`).subscribe({
      next: (response: any) => {
        this.dataSource = response
      }
    })
  }

  onEdit(data:ILesson) {
    this.editData = data;
    this.openDialog()
  }


  onDelete(id: number | string) {
    this.gereralService.delete(`${baseUrl}/${id}`).subscribe({
      next: (response) => {
        console.log(response);
        this.getAllLessons()
      }
    })
  }
}
