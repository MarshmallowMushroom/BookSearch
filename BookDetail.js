/**
 * Created by yitong on 12/17/2016.
 */

'use strict'

import React, {Component} from 'react'
var ReactNative = require('react-native');

var {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
} = ReactNative

var styles = StyleSheet.create({
    container: {
        marginTop: 25,
        alignItems: 'center'
    },
    image: {
        width: 107,
        height: 165,
        padding: 10
    },
    description: {
        padding: 10,
        fontSize: 15,
        color: '#656565'
    }
});

class BookDetail extends Component {
    onPress() {
        this.props.navigator.pop()
    }
    render() {
        var book = this.props.book
        var imageURI = (typeof book.volumeInfo.imageLinks != 'undefined') ? book.volumeInfo.imageLinks.thumbnail : '';
        var description = (typeof book.volumeInfo.description !== 'undefined') ? book.volumeInfo.description : '';
        return (
            <TouchableOpacity onPress={this.onPress.bind(this)}>
                <View style={styles.container}>
                    <Image style={styles.image} source={{uri: imageURI}} />
                    <ScrollView>
                        <Text>{description}</Text>
                    </ScrollView>
                </View>
            </TouchableOpacity>
        );
    }
}

module.exports = BookDetail
