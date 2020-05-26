import {AppConst} from '../constants/app-const';
import * as moment from 'moment';

export class Util {

  static formatDate(date: Date, format: string = AppConst.DATE_FORMAT): string {
    if (!date) {
      return null;
    }
    return moment(date).format(format);
  }

}
