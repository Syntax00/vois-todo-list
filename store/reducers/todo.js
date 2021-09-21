import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from "../actions/todo";

const initialState = {
    todoList: [
        {
            id: '0',
            title: 'First todo item',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            id: '1',
            title: 'Second todo item',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state, todoList: state.todoList.concat(action.payload),
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
        default:
            return state;
    }
}
