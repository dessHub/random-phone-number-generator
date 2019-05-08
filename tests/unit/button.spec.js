import { mount } from '@vue/test-utils'
import Button from '@/components/Button.vue'

describe('Button.vue', () => {
  it('renders correctly', () => {
  const wrapper = mount(Button)
  expect(wrapper.element).toMatchSnapshot()
})
})
