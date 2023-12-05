import { Routes } from '@angular/router';
import { Students } from './pages/students/students.component';
import { Lessons } from './pages/lessons/lessons.component';
import { Exams } from './pages/exams/exams.component';

export const routes: Routes = [
  { path: 'students', component: Students },
  { path: 'lessons', component: Lessons },
  { path: 'exams', component: Exams },
];
