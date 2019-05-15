import { mount } from '@vue/test-utils'
import Vue from 'vue';
import Vuetify from 'vuetify'
import App from '@/App.vue'

Vue.use(Vuetify);


describe('App.vue', () => {
  it('renders correctly', () => {
  const wrapper = mount(App)
  expect(wrapper.element).toMatchSnapshot()
  });
  it('has a created hook', () => {
    expect(typeof App.created).toBe('function')
  });
})
