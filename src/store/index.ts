import { setCookie } from "@/utils/Cookie";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store<any>({
  state: {
    tournaments: [],
  },
  mutations: {
    setTournament(state, teams) {
      state.tournaments.push({
        teams: Object.values(teams).map((value) => ({
          score: 0,
          team: value,
        })),
        link: `${btoa(teams)}_${new Date().getMilliseconds()}`,
      });
      setCookie("tournaments", JSON.stringify(state.tournaments));
    },
    initTournamets(state, teams) {
      if (teams && teams !== "") {
        state.tournaments = JSON.parse(teams);
      }
    },
  },
  actions: {},
  modules: {},
});
