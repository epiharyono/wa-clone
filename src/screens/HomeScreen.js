import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class HomeScreen extends Component {

    render(){
        return (
            <View>
                <Text onPress={()=> this.props.navigation.navigate('Login')}>Hello Page</Text>
            </View>
        )
    }
}
