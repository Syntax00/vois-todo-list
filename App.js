import React from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import TodoList from './components/TodoList/TodoList';

const App = () => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#eee' }}>
      <View>
        <TodoList />
      </View>
    </SafeAreaView>
  );
};

export default App;
