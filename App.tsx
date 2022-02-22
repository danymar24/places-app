import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import StackNavigation from './navigation/StackNavigation';

import PlacesReducer from './store/places/reducer';

const client = new ApolloClient({
  uri: 'https://us-central1-bbred-b99f1.cloudfunctions.net/graphql',
  //uri: 'http://localhost:5001/bbred-b99f1/us-central1/graphql',
  cache: new InMemoryCache()
})

const rootReducer = combineReducers({
  PlacesReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <StackNavigation />
      </Provider>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
