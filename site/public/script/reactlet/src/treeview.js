/** @jsx React.DOM */

var React = require('react');
var bootstrap = require('bootstrap');
var Treeview = require('reactlet-treeview');

var app = app || {};

app.tree1Data = {
    expandLevel: 3,
    treedata: [
        {
            "name": "website",
            "iconClass": "fa fa-folder-o",
            "children": [
                {
                    "name": "images",
                    "iconClass": "fa fa-folder-o",
                    "children": [
                        {
                            "name": "logo.png",
                            "iconClass": "fa fa-file-image-o"
                        },
                        {
                            "name": "background.png",
                            "iconClass": "fa fa-file-image-o"
                        }
                    ]
                },
                {
                    "name": "index.html",
                    "iconClass": "fa fa-file-text-o"
                },
                {
                    "name": "about.html",
                    "iconClass": "fa fa-file-text-o"
                },
                {
                    "name": "product.html",
                    "iconClass": "fa fa-file-text-o"
                }
            ]
        }
    ]
};

$().ready(function() {
    app.treeview1 = React.render(
        <Treeview data={ app.tree1Data } />,
        document.getElementById('treeview1')
    );
});
