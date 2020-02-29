import 'react-native-gesture-handler'
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Home from './screens/Home'
import Genre from './screens/Genre'
import Audience from './screens/Audience'
import {NavigationContainer} from '@react-navigation/native'
import {Context, Provider} from './context'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const {Navigator, Screen} = createMaterialTopTabNavigator();



const App= () => {
  console.log("from app")
  return (
    
    <NavigationContainer>
      
        <Navigator initialRouteName={Home}>
        <Provider>
          <Screen name='Home' component={Home}/>
          <Screen name='Genre' component={Genre} />
          <Screen name='Target_Audience' component={Audience} options={
            {
              title: 'Target Audience'
            }
          }/>
          </Provider>

        </Navigator>
      
    </NavigationContainer>
    
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
