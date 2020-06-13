import {User} from './user';
import {SessionFeedbackTemplate} from './session-feedback-template';

export class UserSessionFeedback {


  id: number;
  user: User;
  sessionFeedback: SessionFeedbackTemplate;
  review: string;
  overAllRating: number;

}
