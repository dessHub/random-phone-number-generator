import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('renders correctly', () => {
  const wrapper = mount(App)
  expect(wrapper.element).toMatchSnapshot()
  });
  it('has a created hook', () => {
    expect(typeof App.created).toBe('function')
  });
  it('fetches new numbers when button clicked', () => {
    const wrapper = mount(App);
    const getNumbers = jest.fn();
    wrapper.setMethods({getNumbers});
    const button = wrapper.find('.btn-generate');
    button.trigger('click');
    expect(getNumbers).toBeCalled();
  })
})
