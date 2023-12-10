import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { IStudent } from '@models/student';
import { ILesson } from '@models/lesson';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { ExamService } from '@services/ExamService';
import { LessonService } from '@services/LessonService';
import { StudentService } from '@services/StudentService';
import { GenericService } from '@services/GenericService';

@Component({
  selector: 'app-add-exam',
  standalone: true,
  templateUrl: './add-exam.component.html',
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  providers: [ExamService, GenericService, LessonService, StudentService],
})
export class AddExamComponent {
  loading = false;
  lessons: ILesson[] = [];
  students: IStudent[] = [];

  examForm = new FormGroup({
    lessonCode: new FormControl(0),
    studentNumber: new FormControl({ value: 0, disabled: true }),
    dateOfExam: new FormControl(''),
    result: new FormControl(''),
  });

  constructor(
    private dialogRef: MatDialogRef<AddExamComponent>,
    private examService: ExamService,
    private lessonService: LessonService,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.getLessons();
  }

  getStudents(classNumber: number) {
    this.studentService
      .getStudentByClass('/Student/GetStudents', classNumber)
      .subscribe({
        next: (result: any) => {
          this.students = result;
          this.examForm.get('studentNumber')?.enable();
        },
        error: (error) => {
          console.log('error');
        },
      });
  }

  getLessons() {
    this.lessonService.getAllLessons('/Lesson/Getlessons').subscribe({
      next: (result: any) => {
        this.lessons = result;
      },
      error: (error) => {
        console.log('error');
      },
    });
  }

  onSubmit() {
    this.loading = true;

    this.examService.saveExam('/Exam/PostExam', this.examForm.value).subscribe({
      next: (response: any) => {
        this.dialogRef.close();
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
      },
    });
  }
}
