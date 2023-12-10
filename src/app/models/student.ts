export interface IStudent {
  studentNumber: number;
  firstName: string;
  surname: string;
  classNumber: number;
}
export type StudentKeys = keyof IStudent;
