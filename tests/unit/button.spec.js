import { mount } from '@vue/test-utils'
import Vue from 'vue';
import Vuetify from 'vuetify'
import Button from '@/components/Button.vue'

Vue.use(Vuetify);

describe('Button.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(Button)
  expect(wrapper.element).toMatchSnapshot()
})
})
