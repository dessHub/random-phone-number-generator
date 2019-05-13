import { shallowMount } from '@vue/test-utils'
import Vue from 'vue';
import Vuetify from 'vuetify';
import TableComponent from '@/components/TableComponent.vue'

Vue.use(Vuetify);
describe('TableComponent.vue', () => {
  it('renders props when passed', () => {
    const numbers = [12345678, 23456789];
    const wrapper = shallowMount(TableComponent, {
      propsData: { numbers }
    })
    expect(wrapper.props().numbers).toBe(numbers)
  })
})
