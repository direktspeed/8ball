 Number.prototype.bm = function(f) { var acc = ""; for(var i = 0; i < this; i++){ acc += i; } return acc; };
 Number.prototype.times = function(f) { for(var i = 0; i < this; i++){ f(i); } return this; };