'use strict';

var React = require('react')
var ReactNative = require('react-native');
var Featured = require('./Featured');
var Search = require('./Search');
var ScrollableTabView = require('react-native-scrollable-tab-view');

var {
    AppRegistry,
    Text,
} = ReactNative;

class BookSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'featured'
        };
    }

    render() {
        return (
            <ScrollableTabView>
                <Featured tabLabel='Featured'/>
                <Search tabLabel='Search'/>
            </ScrollableTabView>
        );
    }
}

AppRegistry.registerComponent('BookSearch', () => BookSearch);