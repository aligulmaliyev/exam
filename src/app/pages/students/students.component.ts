import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AddStudentComponent } from './add-student/add-student.component';
import { IStudent, StudentKeys } from '@models/student';
import { StudentService } from '@services/StudentService';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatDialogModule, MatIconModule],
  templateUrl: './students.component.html',
  providers:[StudentService]
})
export class Students {
  dataSource: IStudent[] = [];
  displayedColumns: StudentKeys[] = [
    'studentNumber',
    'classNumber',
    'firstName',
    'surname',
  ];

  constructor(
    public dialog: MatDialog,
    private studentService: StudentService,
  ) {}

  ngOnInit() {
    this.getAllStudents();
  }

  openDialog() {
    this.dialog.open(AddStudentComponent);
  }

  getAllStudents() {
      this.studentService.getAllStudents('/Student/GetStudents')
      .subscribe({
        next: (response: any) => {
          this.dataSource = response;
        },
        error: (error) => {
          console.log('error');
        },
        complete() {},
      });
  }
}
