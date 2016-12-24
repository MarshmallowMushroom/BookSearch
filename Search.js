/**
 * Created by yitong on 12/16/2016.
 */

'use strict';

import React,  {Component} from 'react'
var ReactNative = require('react-native');

var {
    Navigator
} = ReactNative;

var SearchBooks = require('./SearchBooks')
var SearchResults = require('./SearchResults')
var BookDetail = require('./BookDetail')


class Search extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{
                    title: 'SearchBooks'
                }}
                renderScene={
                    this.renderScene
                }
            />
        )
    };

    renderScene(route, navigator) {
        console.log(route.title)
        if (route.title == 'SearchBooks') {
            return <SearchBooks navigator={navigator}/>
        }
        if (route.title == 'SearchResults') {
            return <SearchResults navigator={navigator} books={route.passProps.books}/>
        }
        if (route.title == 'BookDetail') {
            return <BookDetail navigator={navigator} book={route.passProps.book}/>
        }

    }
}

module.exports = Search

