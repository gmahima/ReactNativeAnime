import React, {useContext} from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
  } from 'react-native';

  import List  from '../components/List'
  import {Context} from '../context'
  

  export default function Genre () {
      const c = useContext(Context)
      const genre = c.genre;
      return (
          <View>
              <Text>
                  Genre
              </Text>
              {/* <List items={genre}></List> */}

          </View>
      )
  }