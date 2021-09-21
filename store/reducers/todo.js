import { ADD_TODO, EDIT_TODO, MARK_TODO_AS_DONE, REMOVE_TODO } from "../actions/todo";

const initialState = {
    todoList: [
        {
            id: '0',
            title: 'First todo item',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            done: false,
        },
        {
            id: '1',
            title: 'Second todo item',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            done: false,
        },
        {
            id: '3',
            title: 'Third todo item',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            done: false,
        },
        {
            id: '4',
            title: 'Fourth todo item',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            done: false,
        },
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state, todoList: [action.payload].concat(state.todoList),
            };
        case REMOVE_TODO:
            return {
                ...state, todoList: state.todoList.filter(({ id } = {}) => id !== action.payload),
            };
        case EDIT_TODO:
            return {
                ...state,
                todoList: state.todoList.map((todoItem) => todoItem.id === action.payload.id ? action.payload : todoItem)
            };
        case MARK_TODO_AS_DONE:
            return {
                ...state,
                todoList: state.todoList.map((todoItem) => todoItem.id === action.payload ? ({ ...todoItem, done: true }) : todoItem)
            };
        default:
            return state;
    }
}
