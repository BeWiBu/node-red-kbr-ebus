module.exports = function(RED) { 
    function KBREbusTelexDetector(config) {
        RED.nodes.createNode(this,config);
        var node=this;

        node.options = {};
        node.options.name = config.name;

        node.on("close", function() {
            
        });
        node.on('input', function(msg) {

        });
    }

    RED.nodes.registerType("kbr-ebus-telex-detector",KBREbusTelexDetector);
}