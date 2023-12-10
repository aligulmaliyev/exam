import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AddExamComponent } from './add-exam/add-exam.component';
import { ExamKeys, IExam } from '@models/exam';
import { ExamService } from '@services/ExamService';

@Component({
  selector: 'app-exams',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatDialogModule, MatIconModule],
  templateUrl: './exams.component.html',
  providers: [ExamService],
})
export class Exams {
  dataSource: IExam[] = [];
  displayedColumns: ExamKeys[] = [
    'id',
    'lessonCode',
    'studentNumber',
    'dateOfExam',
    'result',
  ];

  constructor(public dialog: MatDialog, private examService: ExamService) {}

  ngOnInit() {
    this.getAllExams();
  }

  openDialog() {
    this.dialog.open(AddExamComponent);
  }

  getAllExams() {
    this.examService.getAllExams('/Exam/GetExams').subscribe({
      next: (response: any) => {
        this.dataSource = response;
      },
      error(err) {
        console.log('error');
      },
    });
  }
}
