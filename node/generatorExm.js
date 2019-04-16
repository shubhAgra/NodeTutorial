
function* Add(x) {
    yield x + 1;
    var y = yield (null);
    y=6;
    console.log("Gen value " + x+y);
    return x+y;
}

const gen = Add(5);
console.log("Gen value " + gen.);

gen.next();

gen.next();