import {BaseModel} from './base-model';
import {FeedbackQuestion} from './feedback-question';
import {Session} from './session';

export class SessionFeedback extends BaseModel {

  id: number;
  feedbackQuestions: FeedbackQuestion[];
  session: Session;
  
}
