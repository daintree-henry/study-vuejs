import Vue from 'vue'
import Vuex from 'vuex'

import * as todoApp from './modules/todoApp'

Vue.use(Vuex);

export const storemodule = new Vuex.Store({
    modules: {
        todoApp
    }
});