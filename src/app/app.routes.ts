import { Routes } from '@angular/router';
import { Students } from './pages/students/students.component';
import { Lessons } from './pages/lessons/lessons.component';
import { Exams } from './pages/exams/exams.component';
import { PATH } from './constants/path';

export const routes: Routes = [
  { path: PATH.STUDENTS, component: Students },
  { path: PATH.LESSONS, component: Lessons },
  { path: PATH.EXAMS, component: Exams },
];
