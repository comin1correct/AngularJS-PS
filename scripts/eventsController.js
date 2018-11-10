// we need Node file system object to read and write to disk
var fs = require('fs');

//Read: Get
module.exports.get = function(req,res){
    var event = fs.readFileSync('app/data/event/' + req.params.id + '.json','utf8');
    res.setHeader('Content-Type', 'application/json');
    res.send(event);
};

//Save: Post
module.exports.save = function(req,res) {
    var event = req.body;
    fs.writeFileSync('app/data/event/' + req.params.id + '.json', JSON.stringify(event));
    res.send(event);
};
