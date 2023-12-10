import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AddLessonComponent } from './add-lesson/add-lesson.component';
import { ILesson } from '../../models/lesson';
import { GeneralService } from '../../services/GeneralService';
import { MatIconModule } from '@angular/material/icon';
import { lessonColumns } from '../../constants/tableColumns';

@Component({
  selector: 'app-lessons',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatDialogModule, MatIconModule],
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.components.scss'],
})

export class Lessons {
  dataSource: ILesson[] = [];
  editData: ILesson = {} as ILesson;
  displayedColumns: string[] = lessonColumns;

  constructor(public dialog: MatDialog, private gereralService: GeneralService) { }

  ngOnInit() {
    this.getAllLessons()
  }

  openModal() {
    this.dialog.open(AddLessonComponent, { data: this.editData });
  }

  getAllLessons() {
    this.gereralService.getAll('/api/Lesson/GetLessons').subscribe({
      next: (response: any) => {
        this.dataSource = response
      }
    })
  }

  onEdit(data: ILesson) {
    this.editData = data;
    this.openModal()
  }


  onDelete(id: number | string) {
    // this.gereralService.delete('').subscribe({
    //   next: (response) => {
    //     this.getAllLessons()
    //   }
    // })
  }
}
