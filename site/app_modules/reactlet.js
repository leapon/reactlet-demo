var util = require('util');
var tool = require('leaptool');

module.exports = function(app) {
    
    var moduleName = 'reactlet';
    var block = {
        app: app,
        model: null
    };
    block.data = tool.object(require('basedata')(app, moduleName));
    block.page = tool.object(require('basepage')(app, moduleName, block.data));
    
    app.server.get('/' + moduleName, block.page.getIndex);
    app.server.get('/' + moduleName + '/page/:pagename', block.page.showPage);
    
    return block;
};