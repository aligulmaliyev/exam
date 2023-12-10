export interface ILesson {
  lessonCode: number;
  title: string;
  classNumber: number;
  teacherName: string;
  teacherSurname: string;
}

export type LessonKeys = keyof ILesson;
