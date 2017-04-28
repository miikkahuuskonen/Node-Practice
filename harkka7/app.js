
var greet = require("./greet1");
greet();

//module exportsin ominaisuutena greet
var greet2 = require("./greet2").greet;
greet2();

//module exports korvattu omalla funktiolla
var greet3 = require("./greet3");
greet3.greet();

