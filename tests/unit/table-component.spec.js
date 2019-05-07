import { shallowMount } from '@vue/test-utils'
import TableComponent from '@/components/TableComponent.vue'

describe('TableComponent.vue', () => {
  it('renders props.msg when passed', () => {
    const numbers = [12345678, 23456789];
    const wrapper = shallowMount(TableComponent, {
      propsData: { numbers }
    })
    expect(wrapper.props().numbers).toBe(numbers)
  })
})
