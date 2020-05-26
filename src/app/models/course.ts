import {Type} from 'class-transformer';
import {Util} from '../utils/util';
import {AppConst} from '../constants/app-const';
import {Time} from '@angular/common';
import {Session} from './session';
import {Feedback} from './feedback';
import {BaseModel} from './base-model';

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
  feedBacks: Feedback[];


}
