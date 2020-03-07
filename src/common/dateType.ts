export default class DateType {
  Date_Number_Patch(num: number) {
    if (num >= 0) {
      return num < 10 ? '0' + num : num
    } else {
      return '00'
    }
  }
  Default_Date(date: number) {
    const _Date = new Date(date)
    const Month = this.Date_Number_Patch(_Date.getMonth() + 1)
    const Day = this.Date_Number_Patch(_Date.getDay() + 1)
    const Hours = this.Date_Number_Patch(_Date.getHours())
    const Minutes = this.Date_Number_Patch(_Date.getMinutes())
    const Seconds = this.Date_Number_Patch(_Date.getSeconds())
    return `${Month}-${Day} ${Hours}:${Minutes}:${Seconds}`
  }
}