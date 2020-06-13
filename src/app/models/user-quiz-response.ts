import {User} from './user';
import {QuizQuestion} from './quiz-question';

export class UserQuizResponse {


    id: number;
    user: User;
    question: QuizQuestion;
}
