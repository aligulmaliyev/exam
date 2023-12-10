import { Injectable } from '@angular/core';
import { GenericService } from './GenericService';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private genericService: GenericService) {}

  getAllStudents(url: string) {
    return this.genericService.getAll(url);
  }

  getStudentByClass(url: string, param: number) {
    return this.genericService.get(`${url}?classNum=${param}`);
  }

  saveStudent(url: string, data: any) {
    return this.genericService.post(url, data);
  }
}
