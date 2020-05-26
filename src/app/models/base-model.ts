import {User} from './user';

export class BaseModel {

  createdBy: User;
  createdDate: Date;
  modifiedBy: User;
  modifiedDate: Date;

}
