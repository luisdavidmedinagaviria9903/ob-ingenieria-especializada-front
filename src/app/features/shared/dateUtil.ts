import * as moment from 'moment'
export class DateUtil{
  static formatDate(date: any, format: string){
    return moment(date).format(format);
  }
  static addHourToDate(date: string, time: string){
    console.log(time)
    let currentDate = moment(date, 'YYYY-MM-DD').toDate();
    let timeSplit = time.split(":")
    currentDate.setHours(Number(timeSplit[0]),Number(timeSplit[1]) )
    return DateUtil.formatDate(moment(currentDate),"YYYY-MM-DDTHH:mm:ss");
  }
}
