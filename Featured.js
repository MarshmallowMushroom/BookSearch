/**
 * Created by yitong on 12/16/2016.
 */

'use strict';
import React, {Component} from 'react'
var ReactNative = require('react-native');

var BookList = require('./BookList')
var BookDetail = require('./BookDetail')

var {
    Navigator,
} = ReactNative;

class Featured extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{
                    title: 'BookList'
                }}
                renderScene={
                    this.renderScene
                }
            />
        )
    };

    renderScene(route, navigator) {
        if (route.title == 'BookList') {
            return <BookList navigator={navigator}/>
        }
        if (route.title == 'BookDetail') {
            return <BookDetail navigator={navigator} book={route.passProps.book}/>
        }
    }
}

module.exports = Featured;
