import { Routes } from '@angular/router';
import { PATH } from '@constants/path';
import { Exams } from '@pages/exams/exams.component';
import { Lessons } from '@pages/lessons/lessons.component';
import { Students } from '@pages/students/students.component';

export const routes: Routes = [
  { path: '', redirectTo: PATH.LESSONS, pathMatch: 'full' },
  { path: PATH.STUDENTS, component: Students },
  { path: PATH.LESSONS, component: Lessons },
  { path: PATH.EXAMS, component: Exams },
];
