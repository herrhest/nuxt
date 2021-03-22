var moment = require('moment')

export const state = () => ({
  day: getDay(),
  month: getMonth(),
  week: getWeek(),
  year: getYear(),
  //year: getYear()

})

export const mutations = {
  updateDay(state, number) {
    state.day = number
  }
}

export var getDay = function () {

  var day = new Date();

  var today = day.getDay() - 1;
  //var today = 1;
  return today

}
export var getMonth = function () {

  var month = moment().format('MMMM');
  //var today = 1;
  return month

}
export var getWeek = function () {
  var week = moment().format('W')
  return week
}
export var getYear = function () {
  var year = moment().format('YYYY')
  return year
}
