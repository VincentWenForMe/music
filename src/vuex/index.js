import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
const url = 'https://api.douban.com/v2/movie/in_theaters?count=100';
const soonUrl = 'https://api.douban.com/v2/movie/coming_soon';
const Top250 = 'https://api.douban.com/v2/movie/top250';
const store = new Vuex.Store({
  state: {
    projects: [],
    user: {},
    soon: {},
    top250: {}
  },
  actions: {
    LOAD_PROJECT_LIST: function ({ commit }) {
      axios.get('https://bird.ioliu.cn/v1/?url=' + url).then((response) => {
        commit('SET_PROJECT_LIST', { list: response.data });
        console.log(response.data, 1);
      }, (err) => {
        console.log(err);
      })
    },

    LOAD_SOON_LIST: function ({ commit }) {
      axios.get('https://bird.ioliu.cn/v1/?url=' + soonUrl).then((response) => {
        commit('SET_SOON_LIST', { soons: response.data.subjects })
        console.log(response.data.subjects, 0);
      }, (err) => {
        console.log(err);
      })
    },

    load_TOP250_LIST: function ({ commit }) {
      axios.get('https://bird.ioliu.cn/v1/?url=' + Top250).then((response) => {
        commit('SET_TOP250_LIST', { top: response.data.subjects });
        console.log(response.data.subjects, 3);

      }, (err) => {
        console.log(err);
      })
    }
  },
  mutations: {
    SET_PROJECT_LIST: (state, { list }) => {
      state.projects = list.subjects;
    },

    SET_SOON_LIST: (state, { soons }) => {
      state.soon = soons;
    },

    SET_TOP250_LIST: function (stata, { top }) {
      stata.top250 = top;
    }
  },
  getters: {},
  modules: {}
})

export default store;
