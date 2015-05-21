/** @jsx React.DOM */

var React = require('react');
var bootstrap = require('bootstrap');
var Calendar = require('reactlet-calendar');

var app = app || {};

$().ready(function() {
    // calendar1
    app.componentData = {
        year: 2014,
        month: 9
    };
    app.calendar1 = React.render(
        <Calendar data={ app.componentData } />,
        document.getElementById('calendar1')
    );
    
    // calendar2
    app.componentData = {
        year: 2015,
        month: 5,
        eventsCollection: {
            '2015-05-01': [
                { category:'home', title:'gas bill' },
                { category:'work', title:'report due' }
            ],
            '2015-05-11': [
                { category:'home', title:'test' }
            ]
        }
    };
    app.calendar2 = React.render(
        <Calendar data={ app.componentData } />,
        document.getElementById('calendar2')
    );
});
