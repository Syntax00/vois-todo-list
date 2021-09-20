import React from 'react';
import { View, Text } from 'react-native';

import styles from './TodoListHeader.styles'

const TodoListHeader = () => (
    <View style={styles.container}>
        <Text style={styles.headerText}>
            <Text style={styles.logoHighlight}>VOIS </Text>
            Todo List
        </Text>
    </View>
)

export default TodoListHeader;