const state = {
  bicycleNum: 20,
  rentNum: 0,
  hourRentalFee: 100,
  condition: true,
  rules: ["$100 each time.", "Please return no later than 18:00.", "Be safe."],
};
const getters = {
  isdisabledPlusFn(state) {
    if (state.bicycleNum == 20) {
      return true;
    } else {
      return false;
    }
  },
  isdisabledMinusFn(state) {
    if (state.bicycleNum == 0) {
      return true;
    } else {
      return false;
    }
  },
  calculateIncome: function (state) {
    return state.rentNum * state.hourRentalFee;
  },
};
const actions = {
  resetAllDataAsync: function (context) {
    setTimeout(() => {
      context.commit("resetAllData");
    }, 3000);
  },
};
const mutations = {
  plusOne: function (state) {
    state.bicycleNum = state.bicycleNum + 1;
    if (state.bicycleNum == 0) {
      state.condition = false;
    } else {
      state.condition = true;
    }
  },
  minusOne: function (state) {
    state.bicycleNum = state.bicycleNum - 1;
    state.rentNum += 1;
    if (state.bicycleNum == 0) {
      state.condition = false;
    } else {
      state.condition = true;
    }
  },
  resetAllData: function (state) {
    state.bicycleNum = 20;
    state.rentNum = 0;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
