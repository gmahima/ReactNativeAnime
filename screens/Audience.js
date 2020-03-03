import React, {useContext} from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
    Text} from 'react-native';
import List from '../components/List'
import {Context} from '../context'

export default function Audience () {
    const c = useContext(Context)
    const audience = c.audience;
    return (
        <View>
            <Text>
                Audience
            </Text>
            <List items={audience}></List>

        </View>
    )
}