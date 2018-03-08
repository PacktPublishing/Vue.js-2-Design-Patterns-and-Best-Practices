import { mount } from 'vue-test-utils';
import TodoItem from '../TodoItem';

describe('TodoItem.vue', () => {
  it('should display name of the todo item', () => {
    const todo = { id: 1, name: 'Wash the dishes' };
    const wrapper = mount(TodoItem, { propsData: { todo } });

    // Find the list items on the page
    const liWrapper = wrapper.find('li').text();

    // List items should match the todos item in data
    expect(liWrapper).toBe(todo.name);
  });
});
