import { shallowMount } from '@vue/test-utils'
import TableComponent from '@/components/TableComponent.vue'

describe('TableComponent.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(TableComponent, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
