import { Injectable } from '@angular/core';
import { GenericService } from './GenericService';

@Injectable({
  providedIn: 'root',
})
export class LessonService {
  constructor(private genericService: GenericService) {}

  getAllLessons(url: string) {
    return this.genericService.getAll(url);
  }

  saveLesson(url: string, data: any) {
    return this.genericService.post(url, data);
  }
}
