export const state = () => ({
  day: getDay()

})

export const mutations = {
  updateDay(state, number) {
    state.day = number
  }
}

export var getDay = function () {

  var day = new Date();
  
  var today = day.getDay() - 1;

  return today

}
