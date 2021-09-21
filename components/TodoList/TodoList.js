import React from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

import TodoItem from '../TodoItem/TodoItem';
import TodoListHeader from '../TodoListHeader/TodoListHeader';

import { addTodoTask } from '../../store/actions/todo';

const TodoList = () => {
    const { todoList } = useSelector(state => state);
    const dispatch = useDispatch();

    const indexToSnapScrollTo = 2;
    const listRef = React.useRef(null);

    const handleSnapToItemIndex = React.useCallback((event) => {
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

    return (
        <View>
            <FlatList
                ref={listRef}
                onMomentumScrollEnd={handleSnapToItemIndex}
                ListHeaderComponent={<TodoListHeader />}
                data={todoList}
                renderItem={({ item, index }) => (
                    <TodoItem
                        title={item.title}
                        description={item.description}
                        index={index}
                    />
                )}
                keyExtractor={item => item.id}
                contentContainerStyle={{ padding: 30 }}
            />
        </View>
    )
}

export default TodoList;