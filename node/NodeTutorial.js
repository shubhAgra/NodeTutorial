var Tutor=require('./Tutorial.js');
var exports = module.exports = {};
exports.NodeTutorial=function()
{
    console.log("Node Tutorial")
    this.pTutor = function ()
    {
        var PTutor=Tutor
        PTutor.tutorial();
    }
}

var PTutor=Tutor
PTutor.tutorial();