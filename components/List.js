import React from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Button
  } from 'react-native';
  import Icon from 'react-native-vector-icons/Fontisto'
  import {NavigationContainer} from '@react-navigation/native'
  import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

  const {Navigator, Screen} = createMaterialTopTabNavigator();
  export default function List({items}) {
      
      console.log(items)
      return (
          <View>
              {
                  items.map(x => (
                      <Button title={x}>
                      </Button>
                  ))
              }
          </View>
      )
    //     <View>
    //     {items.forEach((x) => (
    //         <Text> 
    //             x
    //         </Text>
    //   ))}
    //     </View>
    //   )
  }

