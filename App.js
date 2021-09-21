import React from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import { Provider } from 'react-redux';

import TodoList from './components/TodoList/TodoList';

import store from './store/store';

const App = () => {

  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#eee' }}>
        <View>
          <TodoList />
        </View>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
