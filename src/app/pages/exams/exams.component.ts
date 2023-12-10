import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AddExamComponent } from './add-exam/add-exam.component';
import { IExam } from '../../models/exam';
import { GeneralService } from '../../services/GeneralService';
import { baseUrl } from '../../constants/api';
import { MatIconModule } from '@angular/material/icon';


const ELEMENT_DATA: IExam[] = [
  {
    id: 1,
    lessonCode: "22",
    studentNumber: 2,
    dateOfExam: "10.02.2023",
    result: 3
  },
  {
    id: 2,
    lessonCode: "22",
    studentNumber: 2,
    dateOfExam: "10.02.2023",
    result: 3
  },
];

@Component({
  selector: 'app-exams',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatDialogModule, MatIconModule],
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.components.scss'],
})
export class Exams {
  displayedColumns: string[] = [
    'id',
    'classNumber',
    'studentNo',
    'date',
    'grade',
    'action'
  ];
  dataSource = ELEMENT_DATA;
  editData: IExam = {} as IExam;

  constructor(public dialog: MatDialog, private gereralService: GeneralService) { }

  ngOnInit() {
    this.getAllExams()
  }



  openDialog() {
    this.dialog.open(AddExamComponent, {
      data: this.editData
    });
  }

  getAllExams() {
    this.gereralService.getAll(`${baseUrl}`).subscribe({
      next: (response: any) => {
        this.dataSource = response
      }
    })
  }
  
  onEdit(data: IExam) {
    this.editData = data;
    this.openDialog()
  }


  onDelete(id: number | string) {
    this.gereralService.delete(`${baseUrl}/${id}`).subscribe({
      next: (response) => {
        this.getAllExams()
      }
    })
  }
}
