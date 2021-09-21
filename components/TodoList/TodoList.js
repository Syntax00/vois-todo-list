import React, { useState, useRef, useCallback } from 'react';
import { View, FlatList, TouchableOpacity, Text, Modal, TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

import TodoItem from '../TodoItem/TodoItem';
import TodoListHeader from '../TodoListHeader/TodoListHeader';

import { addTodoTask, editTodoTask } from '../../store/actions/todo';

import styles from './TodoList.styles';

const TodoList = () => {
    const indexToSnapScrollTo = 2;

    const [modalVisible, setModalVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [todoItemToEdit, setTodoItemToEdit] = useState({});

    const { todoList } = useSelector(state => state);
    const dispatch = useDispatch();

    const listRef = useRef(null);

    const handleSnapToItemIndex = useCallback((event) => {
        // Don't continue processing if there's still no third item
        if (!todoList[indexToSnapScrollTo]) return;

        const {
            nativeEvent: {
                contentSize: {
                    height: contentHeight, // Gets the height of all the items and content of the FlatList
                },
                contentOffset: { y }, // Gets the current scroll position
            }
        } = event;

        // TodoListHeader Height + Vertical Margins of TodoItem
        const extraPaddingAndHeaderHeightAvg = 40 + (indexToSnapScrollTo * 20);

        // Evaluate every item average height in the list in order to use to determine the distance before snapping happens
        const singleItemHeightAvgHeight = contentHeight / todoList.length;

        // Snapping happens when scroll passes the whole heights of items BEFORE the desired index's item
        const distanceOffsetBeforeSnapping = indexToSnapScrollTo * singleItemHeightAvgHeight + extraPaddingAndHeaderHeightAvg;

        // Snap the desired item to the top of the screen if it was reached
        if (y >= distanceOffsetBeforeSnapping) {
            listRef.current.scrollToIndex({ index: indexToSnapScrollTo, animated: true });
        }
    }, [todoList])

    const editAction = (item) => {
        setModalVisible(true);
        setTodoItemToEdit(item);
        setTitle(item.title);
        setDescription(item.description)
    }

    const reset = () => {
        setModalVisible(false);
        setTitle('');
        setDescription('');
        setTodoItemToEdit({});
    }

    return (
        <View>
            <FlatList
                ref={listRef}
                onMomentumScrollEnd={handleSnapToItemIndex}
                ListHeaderComponent={<TodoListHeader openAddTodoModal={setModalVisible} />}
                data={todoList}
                renderItem={({ item, index }) => (
                    <TodoItem
                        data={item}
                        index={index}
                        editAction={editAction}
                    />
                )}
                keyExtractor={item => item.id}
                contentContainerStyle={{ padding: 30 }}
            />

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.formContainer}>
                        <Text style={styles.modalHeaderText}>
                            {todoItemToEdit.id
                                ? `Edit ${todoItemToEdit.title}`
                                : 'Add New Todo Task'}
                        </Text>

                        <View style={styles.modalForm}>
                            <TextInput
                                placeholder="Insert todo task title.."
                                style={styles.todoTextInput}
                                onChangeText={(value) => setTitle(value)}
                                defaultValue='test'
                                value={title}
                            />
                            <TextInput
                                placeholder="Insert todo task description.."
                                style={styles.todoTextInput}
                                onChangeText={(value) => setDescription(value)}
                                value={description}
                            />

                            <TouchableOpacity
                                onPress={() => {
                                    if (title) {
                                        if (todoItemToEdit.id) {
                                            dispatch(editTodoTask({
                                                id: todoItemToEdit.id,
                                                title,
                                                description,
                                                done: todoItemToEdit.done,
                                            }));
                                        } else {
                                            dispatch(addTodoTask({
                                                id: Math.random(),
                                                title,
                                                description,
                                            }));
                                        }

                                        reset();
                                    }
                                }}
                                style={styles.confirmAddTodoBtn}
                            >
                                <Text style={styles.btnText}>{todoItemToEdit.id ? 'Edit' : 'Add'} Todo</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => { reset(); }}
                                style={styles.closeBtn}
                            >
                                <Text style={styles.btnText}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default TodoList;