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

  saveStudent(url: string, data: any) {
    return this.genericService.post(url, data);
  }
}
