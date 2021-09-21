export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const MARK_TODO_AS_DONE = "MARK_TODO_AS_DONE";

export const addTodoTask = (todoItem) => ({
    type: ADD_TODO,
    payload: todoItem,
});

export const removeTodoTask = (todoId) => ({
    type: REMOVE_TODO,
    payload: todoId,
});

export const editTodoTask = (todoItem) => ({
    type: EDIT_TODO,
    payload: todoItem,
});
export const markTodoAsDone = (todoId) => ({
    type: MARK_TODO_AS_DONE,
    payload: todoId,
})