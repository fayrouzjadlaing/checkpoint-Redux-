import { ADDTASK, DELETETASK, EDITTASK, COMPLETEDTASK } from "../actions/types";

const initialState = {
  todos: [],
  current: null,
  filteredTodos: [],
};

const Taskreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADDTASK:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case EDITTASK:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload.id
            ? { ...todo, description: payload.description }
            : todo
        ),
      };
    case DELETETASK:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    case COMPLETEDTASK:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };

    default:
      return state;
  }
};

export default Taskreducer;
