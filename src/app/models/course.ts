import {Session} from './session';
import {Feedback} from './feedback';
import {BaseModel} from './base-model';
import {CourseCriteria} from './course-criteria';

export class Course extends BaseModel {

  id: number;
  title: string;
  description: string;
  thumbnail: string;
  type: string;
  isCourseLive: boolean;
  active: boolean;
  startDate: Date;
  endDate: Date;
  startTime: Date;
  endTime: Date;
  pricing: number;
  promoVideo: string;
  features: string[];
  courseMaterial: string[];
  sessions: Session[];
  courseCriteria: CourseCriteria;
  feedBacks: Feedback[];


}
