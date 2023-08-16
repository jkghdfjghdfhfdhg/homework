import { ADD_TODO, REMOVE_TODO } from './actions';

const initialState = {
  todos: [
    {
      id: 1,
      title: 'do home work',
    },
    {
      id: 2,
      title: 'eat',
    },
  ],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newTodo = {
        id: state.todos.length ? state.todos[state.todos.length - 1].id + 1 : 1,
        title: action.title,
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    }
    case REMOVE_TODO: {
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id),
      };
    }
    default:
      return state;
  }
};

export default todosReducer;
