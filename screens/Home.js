import React from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    FlatList,
    TouchableOpacity
  } from 'react-native';
  import Icon from 'react-native-vector-icons/Fontisto'
  import List from '../components/List'

  export default function Home () {
      return (
          <View style={styles.view}>
              <Text style={styles.text} onPress={() => console.log("hi")}>
                  Home
              <Icon name="home" size={30} color="#900" style={styles.icon}/>
              </Text>
              <List></List>
          </View>
          
      )
  }
  const styles = StyleSheet.create(
      {
          view: {
              flex: 1,
              backgroundColor: '#b3f0ff',
              alignItems: 'center',
              paddingTop: 15 
          },
          text: {
              fontSize: 20,
              fontWeight: 'bold'
              
          },
          icon: {
              color: 'black'
          }
    }
    )
