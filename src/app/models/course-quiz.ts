import {QuizQuestion} from './quiz-question';
import {BaseModel} from './base-model';

export class CourseQuiz extends BaseModel {

  id: number;
  quizName: string;
  sessionId: number;
  hourDuration: number;
  minuteDuration: number;
  active: boolean; // Delete
  expireQuiz: boolean; // To expire quiz link
  questions: QuizQuestion[];

}
