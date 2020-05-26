import {Speaker} from './speaker';
import {SessionLink} from './session-link';
import {Feedback} from './feedback';
import {BaseModel} from './base-model';

export class Session extends BaseModel {

  id: number;
  name: string;
  description: string;
  thumbnail: string;
  date: Date;
  startTime: Date;
  endTime: Date;
  speaker: Speaker;
  links: SessionLink[];
  feedBacks: Feedback[];
  active: boolean;

}
