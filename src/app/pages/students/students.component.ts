import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AddStudentComponent } from './add-student/add-student.component';
import { IStudent } from '../../models/student';
import { GeneralService } from '../../services/GeneralService';
import { baseUrl } from '../../constants/api';
import {MatIconModule} from '@angular/material/icon';

const ELEMENT_DATA: IStudent[] = [
  {
    id: 1,
    studentNo: 1,
    classNumber: 2,
    name: 'Elcin',
    lastName: 'Huseynov',
  },
  {
    id: 2,
    studentNo: 2242,
    classNumber: 13,
    name: 'Vasif',
    lastName: 'Huseynov',
  },
];

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatDialogModule,MatIconModule],
  templateUrl: './students.component.html',
  styleUrls: ['./students.components.scss'],
})
export class Students{
  displayedColumns: string[] = [
    'id',
    'studentNo',
    'classNumber',
    'name',
    'lastName',
    'action'
  ];
  
  dataSource = ELEMENT_DATA;
  editData: IStudent = {} as IStudent;

  constructor(public dialog: MatDialog, private gereralService: GeneralService) { }

  ngOnInit() {
    this.getAllStudents()
  }

  openDialog() {
    this.dialog.open(AddStudentComponent, {
      data: this.editData
    });
  }

  getAllStudents() {
    this.gereralService.getAll(`${baseUrl}`).subscribe({
      next: (response: any) => {
        this.dataSource = response
      }
    })
  }

  onEdit(data:IStudent) {
    this.editData = data;
    this.openDialog()
  }

  onDelete(id: number | string) {
    this.gereralService.delete(`${baseUrl}/${id}`).subscribe({
      next: (response) => {
        console.log(response);
        this.getAllStudents()
      }
    })
  }
}
