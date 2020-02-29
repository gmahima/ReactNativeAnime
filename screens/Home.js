import React from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
  } from 'react-native';
  import Icon from 'react-native-vector-icons/Fontisto'

  export default function Home () {
      return (
          <View style={styles.view}>
              <Text style={styles.text}>
                  Home
              
              <Icon name="home" size={30} color="#900" style={styles.icon}/>
              </Text>
          </View>
      )
  }
  const styles = StyleSheet.create(
      {
          view: {
              flex: 1,
              backgroundColor: '#b3f0ff',
              alignItems: 'center',
              justifyContent: 'center'
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
