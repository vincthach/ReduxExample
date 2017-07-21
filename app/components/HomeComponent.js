
import React, { Component } from 'react'
import { View, Text, FlatList, Image } from 'react-native'
export default class HomeComponent extends Component {

  renderItem (item) {
    return (<View key={ item.DISH_ID } style={ styles.menuItemContainer }>
        <Image style={ styles.imageMenu } source={{ uri: item.DELEGATE_IMAGE }} />
        <Text style={ styles.menuItemTitle }> {item.NAME} </Text>
    </View>)
  }

  render() {
    let { homeList } = this.props;
    return (
         <FlatList
            style={ styles.container }
            data={ homeList }
            renderItem={ ({item}) => this.renderItem(item) }/>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
  imageMenu: {
    width: 100,
    height: 100,
  },
  menuItemContainer: {
    flexDirection: 'row',
    marginBottom: 5
  },
  menuItemTitle: {
    marginLeft: 5,
  }
}
