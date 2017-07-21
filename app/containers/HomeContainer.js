
import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import HomeComponent from '../components/HomeComponent'
import { connect } from 'react-redux';
import { homeLoading, homeLoaded, homeLoadError, homeFetchList } from '../actions/HomeActions'
class HomeContainer extends Component {

  componentDidMount() {
    this.props.homeFetchList()
  }

  render() {
    const homeList = this.props.homeData.homeList;
    return (
      <View style={ styles.container }>
        <HomeComponent homeList={ homeList } />
      </View>
    );
  }
}

export default connect( 
  state => {
    return {
      homeData: state.homeData
    }
  },
  dispatch => {
    return {
      homeLoading: ()=> dispatch( homeLoading() ),
      homeLoaded: (list) => dispatch( homeLoaded(list) ),
      homeLoadError: (errorVal) => dispatch( homeLoadError(errorVal) ),
      homeFetchList: () => dispatch( homeFetchList() )
    }
  }
)(HomeContainer);

const styles = {
  container: {
    flex: 1,
   
  }
}
