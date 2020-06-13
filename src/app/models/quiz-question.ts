import {QuestionType} from './question-type.enum';

export class QuizQuestion {

  question: string;
  choiceA: string;
  choiceB: string;
  choiceC: string;
  choiceD: string;
  correctAnswer: string[];
  type: QuestionType;

}
