import { mount } from 'vue-test-utils';
import Hello from '../Hello'

describe('Hello.vue', () => {
  it('should greet the user', () => {
    const wrapper = mount(Hello);

    expect(wrapper.vm.msg).toEqual('Welcome to Your Vue.js PWA! Deployed to Firebase by Travis CI');
  })
})