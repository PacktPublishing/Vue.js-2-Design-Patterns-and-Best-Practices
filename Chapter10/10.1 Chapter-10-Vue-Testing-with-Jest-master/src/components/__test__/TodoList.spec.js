import { mount } from 'vue-test-utils';
import TodoList from '../TodoList';
import TodoItem from '../TodoItem';
import TodoInput from '../TodoInput';

describe('TodoList.vue', () => {
  it('should contain a list of Todo items', () => {
    const todos = [{ id: 1, name: 'Wash the dishes' }];
    const wrapper = mount(TodoList, {
      data: { todos },
    });

    // Find the list items on the page
    const liWrapper = wrapper.find(TodoItem).text();

    // List items should match the todos item in data
    expect(liWrapper).toBe(todos[0].name);
  });

  it('should add an item to the todo list', () => {
    const wrapper = mount(TodoList);
    const todos = wrapper.vm.todos;
    const newTodos = wrapper.vm.addTodo('Go to work');

    expect(todos.length).toBeLessThan(newTodos.length);
  });

  it('should add an id to each todo item', () => {
    const wrapper = mount(TodoList);
    const todos = wrapper.vm.todos;
    const newTodos = wrapper.vm.addTodo('Go to work');

    newTodos.map(item => {
      expect(item.id).toBeTruthy();
    });
  });

  it('should add an item to the todo list when the button is clicked', () => {
    const wrapper = mount(TodoList);
    wrapper.find('form').trigger('submit', 'Clean the car');

    const todos = wrapper.vm.todos;

    expect(todos.length).toBe(1);
  });

  it('should call addTodo when form is submitted', () => {
    const wrapper = mount(TodoList);
    const spy = jest.spyOn(wrapper.vm, 'addTodo');
    wrapper.find('form').trigger('submit', 'Clean the car');

    expect(wrapper.vm.addTodo).toHaveBeenCalled();
  });

  it('should call addTodo when the addTodo event happens', () => {
    const wrapper = mount(TodoList);

    wrapper.vm.addTodo = jest.fn();
    wrapper.find(TodoInput).vm.$emit('addTodo', 'Clean the car');

    expect(wrapper.vm.addTodo).toBeCalledWith('Clean the car');
  });

  it('adds an item to the todolist when the addTodo event happens', () => {
    const wrapper = mount(TodoList);

    wrapper.find(TodoInput).vm.$emit('addTodo', 'Clean the car');

    const todos = wrapper.vm.todos;

    expect(todos.length).toBe(1);
  });
});
