import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './TodoListHeader.styles'

const TodoListHeader = ({ openAddTodoModal = _ => _ }) => (
    <View style={styles.container}>
        <Text style={styles.headerText}>
            <Text style={styles.logoHighlight}>_VOIS </Text>
            Todo List
        </Text>


        <TouchableOpacity
            onPress={() => openAddTodoModal(true)}
            style={styles.addTodoBtn}
        >
            <Text style={styles.addTodoBtnTxt}>Add Todo +</Text>
        </TouchableOpacity>
    </View>
);

export default TodoListHeader;