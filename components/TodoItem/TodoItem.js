import React from 'react';
import { View, Text, Animated, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { markTodoAsDone, removeTodoTask } from '../../store/actions/todo';

import styles from './TodoItem.styles';

const TodoItemControllers = ({ data = {}, editAction }) => {
    const dispatch = useDispatch();

    const { done, id } = data;

    return (
        <View style={styles.controllersContainer}>
            <TouchableOpacity onPress={() => dispatch(markTodoAsDone(id))}>
                {done ? <Text style={{ color: 'green' }}>🎉 Complete!</Text> : <Text>👌 Mark as Complete</Text>}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => editAction(data)}>
                <Text>🖊️ Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => dispatch(removeTodoTask(id))}>
                <Text>🗑️ Delete</Text>
            </TouchableOpacity>
        </View>
    )
}

const getTitleAbbrev = (title = "") => {
    const _title = title.split(' ');
    if (!_title.length) return "";

    return _title.length > 1 ? `${_title[0][0]}${_title[1][0]}` : _title[0][0];
}

const TodoItem = ({ data = {}, index, editAction = _ => _ }) => {
    const { title, description } = data;

    const [animated] = React.useState(new Animated.Value(0));

    React.useEffect(() => {
        Animated.timing(animated, {
            toValue: 1,
            duration: 300,
            delay: (index + 1) * 150,
            useNativeDriver: true
        }).start();
    }, [animated])

    return (
        <Animated.View style={[styles.item, {
            opacity: animated,
            transform: [{
                translateX: animated.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-100, 1]
                })
            }]
        }]}>
            <View style={styles.itemContent}>
                <View style={styles.itemLogo}>
                    <View style={styles.itemLogoContent}>
                        <Text style={styles.itemLogoText}>
                            {getTitleAbbrev(title).toUpperCase()}
                        </Text>
                    </View>
                </View>

                <View style={styles.itemInformation}>
                    <Text style={styles.title}>{title}</Text>
                    <Text
                        style={styles.description}
                        numberOfLines={2}
                        ellipsizeMode='tail'
                    >
                        {description}
                    </Text>
                </View>
            </View>

            <TodoItemControllers data={data} editAction={editAction} />
        </Animated.View>
    )
};

export default TodoItem;