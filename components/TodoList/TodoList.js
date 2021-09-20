import React from 'react';
import { View, Text, FlatList } from 'react-native'
import TodoItem from '../TodoItem/TodoItem';
import TodoListHeader from '../TodoListHeader/TodoListHeader';
import styles from './TodoList.styles';
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Finalize request details route',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Implement request tracking functionality',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: '58694a0f-3da1-471f-bds6-145571e29d72',
        title: 'Implement branching functionality',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: 'bd7acbea-c1b1-46c2-aea5-3ad53abb28ba',
        title: 'Handle states icons',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: '3ac68afc-c605-48d3-a4v8-fbd91aa97f63',
        title: 'Study for MSc in Blockchain',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Study for TOEFL',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
];


const TodoList = () => {

    return (
        <View>
            <FlatList
                ListHeaderComponent={<TodoListHeader />}
                data={DATA}
                renderItem={({ item }) => (
                    <TodoItem title={item.title} description={item.description} />
                )}
                keyExtractor={item => item.id}
                contentContainerStyle={{ padding: 30 }}
            />
        </View>
    )
}

export default TodoList;