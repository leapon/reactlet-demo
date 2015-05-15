/** @jsx React.DOM */

var React = require('react');
var bootstrap = require('bootstrap');
var Table = require('reactlet-table');

var app = app || {};

app.getIdText = function(id) {
    return 'ID-' + id;
}

app.table1Data = {
    boxClass: 'table-container-bordered',
    colModel: {
        id: { name:'id', text:'ID', width:'15%', key:true, format:app.getIdText },
        name: { name:'name', text:'Name', width:'20%', sort:'up' },
        price: { name:'price', text:'Price', width:'15%', type:'money' },
        description: { name:'description', text:'Description', width:'30%' },
        extra: { name:'extra', text:'Extra', show:false, width:'10%' }
    },
    dataItems:[
        { id:'P01', name:'egg', price:7, description:'fresh egg', extra:'n/a' },
        { id:'P21', name:'bread', price:2.99, description:'whole grain bread', extra:'n/a' },
        { id:'P23', name:'chip', price:2.1, description:'potato chip', extra:'n/a' },
        { id:'P54', name:'sauce', price:1.89, description:'dipping sauce', extra:'n/a' },
        { id:'P81', name:'corn', price:4.59, description:'fresh corn', extra:'n/a' }
    ]
};

app.table2Data = {
    boxClass: 'table-container-bordered',
    colModel: {
        id: { name:'id', text:'ID', width:'15%', key:true, format:app.getIdText },
        name: { name:'name', text:'Name', width:'20%', sort:'up' },
        price: { name:'price', text:'Price', width:'15%', type:'money' },
        description: { name:'description', text:'Description', width:'30%' },
        extra: { name:'extra', text:'Extra', show:false, width:'10%' }
    },
    dataItems:[
        { id:'P01', name:'egg', price:5.98, description:'fresh egg', extra:'n/a' },
        { id:'P21', name:'bread', price:1.29, description:'white bread', extra:'n/a' },
        { id:'P23', name:'chip', price:2.13, description:'potato chip', extra:'n/a' },
        { id:'P54', name:'sauce', price:1.89, description:'dipping sauce', extra:'n/a' },
        { id:'P81', name:'corn', price:4.59, description:'fresh pear', extra:'n/a' },
        { id:'P73', name:'chip', price:2.12, description:'potato chip', extra:'n/a' },
        { id:'P24', name:'sauce', price:1.81, description:'meat sauce', extra:'n/a' },
        { id:'P91', name:'corn', price:4.99, description:'fresh aple', extra:'n/a' },
        { id:'P20', name:'chip', price:2.15, description:'potato chip', extra:'n/a' },
        { id:'P52', name:'sauce', price:1.82, description:'dipping sauce', extra:'n/a' },
        { id:'P89', name:'corn', price:4.49, description:'fresh cucumber', extra:'n/a' },
        { id:'P31', name:'chip', price:2.19, description:'potato chip', extra:'n/a' },
        { id:'P34', name:'sauce', price:1.29, description:'mild sauce', extra:'n/a' },
        { id:'P92', name:'corn', price:4.39, description:'popcorn', extra:'n/a' },
        { id:'P33', name:'chip', price:2.32, description:'potato soup', extra:'n/a' },
        { id:'P64', name:'sauce', price:1.89, description:'dipping sauce', extra:'n/a' },
        { id:'P61', name:'corn', price:4.29, description:'fresh corn', extra:'n/a' },
        { id:'P39', name:'chip', price:2.41, description:'potato mash', extra:'n/a' },
        { id:'P84', name:'sauce', price:1.80, description:'hot sauce', extra:'n/a' },
        { id:'P85', name:'corn', price:4.19, description:'fresh corn', extra:'n/a' },
        { id:'P30', name:'bread', price:2.99, description:'eight grain bread', extra:'n/a' },
        { id:'P43', name:'chip', price:2.51, description:'corn chip', extra:'n/a' },
        { id:'P53', name:'sauce', price:1.87, description:'medium sauce', extra:'n/a' }
    ],
    paging: {
        size: 10,
        page: 1
    }
};

$().ready(function() {
    // table1
    app.table1 = React.renderComponent(
        <Table data={ app.table1Data } />,
        document.getElementById('table1')
    );
    // table2 with paging
    app.table2 = React.renderComponent(
        <Table data={ app.table2Data } />,
        document.getElementById('table2')
    );
});
