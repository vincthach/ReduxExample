
import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import homeReducers from './reducers/HomeReducers'
import HomeContainer from './containers/HomeContainer'

const store = createStore(combineReducers( {homeData: homeReducers} ), applyMiddleware(thunk))
// this is new config
export default class MeebooReact extends Component {

  render() {
    return (
      <Provider store={ store }>
        <View style={ styles.container }>
            <HomeContainer />
        </View>
      </Provider>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
}
