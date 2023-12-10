export interface IExam {
    id: number;
    lessonCode: string,
    studentNumber: number;
    dateOfExam: string;
    result: number
}
export type ExamKeys = keyof IExam;