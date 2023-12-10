import { Injectable } from '@angular/core';
import { GenericService } from './GenericService';

@Injectable({
  providedIn: 'root',
})

export class ExamService {
  constructor(private genericService: GenericService) {}

  getAllExams(url: string) {
    return this.genericService.getAll(url);
  }

  saveExam(url: string, data: any) {
    return this.genericService.post(url, data);
  }
}
