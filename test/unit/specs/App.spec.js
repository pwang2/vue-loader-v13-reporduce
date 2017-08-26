import Vue from 'vue';
import Vuex from 'vuex';
import Router from 'vue-router';
import { sync } from 'vuex-router-sync';
import AppInjector from '!!vue-loader?inject!@/App.vue';
Vue.use(Vuex);
Vue.use(Router);

const router = new Router({
  routes: [{ path: '/1', name: '1' }, { path: '/2', name: '2' }]
});

function prepVm() {
  const state = { SSOT: 1 };
  const mutations = {};
  const actions = {};
  const store = new Vuex.Store({ state, mutations, actions });
  sync(store, router);
  return new Vue({
    store,
    router,
    render: h =>
      h(
        AppInjector(
          {
            /*nothing to inject*/
          }
        )
      )
  }).$mount(document.createElement('div'));
}

describe('App.vue', () => {
  it('should render', () => {
    var vm = prepVm();
    expect(vm.$el.textContent).to.equal('1');
  });
});
