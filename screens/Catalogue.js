import React from 'react';
import { FlatList, StyleSheet, Text, View,Image } from 'react-native';
import {ListItem,Avatar} from 'react-native-elements';

const list = [
    {
    name: 'Shirt',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Cotton Shirts'
  },
  {
    name: 'Pant',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Pants'
  },
]

export default class Catalogue extends React.Component{

    constructor(){
        super()
    }

keyExtractor = (item, index) => index.toString()

renderItem = ({ item,i }) => {
    return(
      <ListItem
      key={i}
      title={item.name}
      subtitle={item.subtitle}
      titleStyle={{ color: 'black', fontWeight: 'bold' }}
      leftElement={
        <Image style={{
          width:50,
          height:50
        }} source={{uri:item.avatar_url}} />
      }
      bottomDivider
    />
)}

    render(){
        return(
            <View style={{backgroundColor:'black',flex:1}}>
              <FlatList
                keyExtractor={this.keyExtractor}
                data={list}
                renderItem={this.renderItem}
              />
            </View>
        )
    }
}