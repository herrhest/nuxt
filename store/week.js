var moment = require('moment');
export const state = () => ({
  week: getWeek()

})

export const mutations = {
  updateWeek(state, number) {
    state.week = number
  }
}

export var getWeek = function () {

   
  var week = moment().format('w');
  //var week = 1
  return week

}
