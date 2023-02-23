import * as moment from 'moment'
export class DateUtil{
  static formatDate(date: any, format: string){
    return moment(date).format(format);
  }
}
